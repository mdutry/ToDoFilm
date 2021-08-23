const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    wishlistMovie: {
        type: Array
    },
    wishlistSerie: {
        type: Array
    },
    wishlistPerson: {
        type: Array
    }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('user', userSchema)