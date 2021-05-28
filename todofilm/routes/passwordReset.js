const express = require('express')
const router = express.Router()

const passwordResetController = require('../controllers/passwordReset')

router.post('/reset', passwordResetController.reset)
router.post('/reset-confirm/:token', passwordResetController.resetConfirm)

module.exports = router