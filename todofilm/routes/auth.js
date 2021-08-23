const express = require('express')
const authController = require('../controllers/auth')

const router = express.Router()

router.post('/api/inscription', authController.inscription)
router.post('/api/connexion', authController.connexion)

module.exports = router