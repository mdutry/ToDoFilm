const express = require('express')
const authController = require('../controllers/auth')

const router = express.Router()

router.post('/inscription', authController.inscription)
router.post('/connexion', authController.connexion)

// React
// router.get('/*', (_, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })

module.exports = router