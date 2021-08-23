const User = require('../models/user')
const bcrypt = require('bcrypt')

exports.recupInfoUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        res.status(200).json({ user })
    } catch (error) {
        res.status(404).json({ error })
    }
}

exports.modifInfoUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        await user.save()
        res.status(200).json({ message: 'Utilisateur modifié !' })
    } catch (error) {
        res.status(400).json({ error })
    }
}

exports.modifPasswordUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.id })

        // on vérifie le mot de passe actuel
        const compare = await bcrypt.compare(req.body.oldPassword, user.password)
        if (!compare) {
            return res.status(401).json({ message: 'Mot de passe incorrect' })
        }
        
        // hash new password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.newPassword, salt)

        // Update user
        const newUser = await User.findByIdAndUpdate({ _id: req.params.id }, { password: hash })
        await newUser.save()
        res.status(200).json({ message: 'Mot de passe utilisateur modifié !' })
    } catch (error) {
        res.status(400).json({ error })
    }
}

exports.deleteInfoUser = async (req, res, next) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: 'Utilisateur supprimé !' })
    } catch (error) {
        res.status(400).json({ error })
    }
}

exports.ajoutMovie = async (req, res, next) => {
    try {
        const movie = await User.updateOne(
            { _id: req.params.id },
            { $push: { wishlist: req.body.movieId } }
        )
        res.status(200).json({ message: 'Film ajouté !' })
    } catch (error) {
        res.status(400).json({ error })
    }
}

exports.deleteMovie = async (req, res, next) => {
    try {
        const movie = await User.updateOne(
            { _id: req.params.id },
            { $pull: { wishlist: parseInt(req.params.movieid) } }
        )
        res.status(200).json({ message: 'Film supprimé !' })
    } catch (error) {
        res.status(400).json({ error })
    }
}