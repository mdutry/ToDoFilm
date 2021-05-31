const express = require('express')
const passwordResetController = require('../controllers/passwordReset')

const router = express.Router()

router.post('/api/reset', passwordResetController.reset)
router.post('/api/reset-confirm/:token', passwordResetController.resetConfirm)

module.exports = router