const { Schema, model } = require('mongoose')

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: Schema.Types.String,
    required: true
  }
}, {
  timestamps: true
})

schema.index({ 'updatedAt': 1 }, { expireAfterSeconds: 7200 })

const PasswordReset = model('PasswordReset', schema)

module.exports = PasswordReset