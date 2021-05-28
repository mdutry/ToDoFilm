const mongoose = require('mongoose')

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
    wishlist: {
        type: Array
    }
})

userSchema.plugin(uniqueValidator)

userSchema.pre('save', async function(next){
    if (this.isNew || this.isModified('password')) this.password = await bcrypt.hash(this.password, saltRounds)
    next()
  })

module.exports = mongoose.model('user', userSchema)