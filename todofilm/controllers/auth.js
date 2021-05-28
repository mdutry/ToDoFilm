const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const dotenv = require('dotenv')
dotenv.config()


exports.inscription = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salt)
        const user = new User ({
            prenom: req.body.prenom,
            nom: req.body.nom,
            email: req.body.email,
            password: hash
        })
        await user.save()
        res.status(201).json({ message: 'Utilisateur créé !' })
    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.connexion = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(401).json({ message: 'Utilisateur non trouvé !' })
        }

        const compare = await bcrypt.compare(req.body.password, user.password)
        if (!compare) {
            return res.status(401).json({ error: 'Mot de passe incorrect' })
        }

        res.status(200).json({
            userId: user._id,
            token: jwt.sign(
                { userId: user._id },
                process.env.RANDOM_TOKEN_SECRET,
                { expiresIn: '12h' }
            )
        })
    } catch (error) {
        res.status(500).json({ error })
    }
}