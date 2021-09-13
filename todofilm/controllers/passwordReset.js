const router  = require('express').Router()
const User = require('../models/user.js')
const PasswordReset = require('../models/PasswordReset.js')
const { v4 } = require('uuid')
const bcrypt = require('bcrypt')
const path = require('path')

const mailjet = require ('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

exports.reset = async (req, res) => {

    // Check if user with provided email exists
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(404).json({ message: "L'adresse mail n'existe pas !" })
    }

    // Création d'un jeton de réinitialisation du mot de passe et enregistrement dans la collection de l'utilisateur 
    // Si il existe déjà un enregistrement avec l'utilisateur actuel, il est remplacé
    const token = v4().toString().replace(/-/g, '')
    
    PasswordReset.updateOne(
        { 
            user: user._id 
        }, {
            user: user._id,
            token: token
        }, {
            upsert: true
        }
    )
        .then( updateResponse => {
            // Envoi d'un e-mail à l'utilisateur contenant le lien de réinitialisation du mot de passe
            const resetLink = req.protocol + '://' + req.body.hostClient + `/mot-de-passe-oublie-modif/${token}`;
            // const resetLink = path.join(__dirname, `mot-de-passe-oublie-modif/${token}`)
            console.log(resetLink)

            const request = mailjet
                .post("send", {'version': 'v3.1'})
                .request({
                    "Messages":[
                        {
                        "From": {
                            "Email": "matthieu.testdev@gmail.com",
                            "Name": "Matthieu"
                        },
                        "To": [
                            {
                            "Email": user.email,
                            "Name": user.prenom
                            }
                        ],
                        "Subject": "Password Reset",
                        "HTMLPart": `Salut ${user.prenom}, Voici ton lien de réinitialisation du mot de passe : ${resetLink}. 
                        Si tu n'as pas fait la demande pour modifier ton mot de passe, ignore cet email.`
                        }
                    ]
                })
                request
                .then((result) => {
                    console.log(result.body)
                })
                .catch((err) => {
                    console.log(err.statusCode)
                })
            
            res.status(200).json({ message: 'Mail envoyé !' })
        })
        .catch( error => {
            res.status(400).json({ error })
        })
}

exports.resetConfirm = async (req, res) => {
    try {
        const token = req.params.token
        const passwordReset = await PasswordReset.findOne({ token })

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salt)

        // Update user
        const user = await User.findByIdAndUpdate({ _id: passwordReset.user }, { password: hash })
        console.log('user', user.password)

        await user.save()

        // Delete password reset document in collection
        await PasswordReset.deleteOne({ _id: passwordReset._id })

        /* Send successful password reset email */

            const request = mailjet
            .post("send", {'version': 'v3.1'})
            .request({
                "Messages":[
                    {
                    "From": {
                        "Email": "matthieu.testdev@gmail.com",
                        "Name": "Matthieu"
                    },
                    "To": [
                        {
                        "Email": user.email,
                        "Name": user.prenom
                        }
                    ],
                    "Subject": "Password Reset Successful",
                    "HTMLPart": `Congratulations ${user.prenom} ! Your password reset was successful.`
                    }
                ]
            })
            request
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
            })

        res.status(200).json({ message: 'Mot de passe modifié et mail envoyé !' })
    } catch (error) {
        res.status(400).json({ error })
    }
}