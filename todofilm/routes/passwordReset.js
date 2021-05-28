const express = require('express')
const passwordResetController = require('../controllers/passwordReset')

const router = express.Router()

router.post('/reset', passwordResetController.reset)
router.post('/reset-confirm/:token', passwordResetController.resetConfirm)

module.exports = router