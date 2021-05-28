const express = require('express')
const userController = require('../controllers/user')

// Path avec ES module
// const path = require('path')
// const { dirname } = require('path')
// const { fileURLToPath } = require('url')
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const router = express.Router()

router.get('/user/:id', userController.recupInfoUser)
router.patch('/user/:id', userController.modifInfoUser)
router.patch('/user/:id/password', userController.modifPasswordUser)
router.delete('/user/:id', userController.deleteInfoUser)

router.patch('/user/:id/wishlist', userController.ajoutMovie)
router.delete('/user/:id/wishlist/:movieid', userController.deleteMovie)

// React
// router.get('/*', (_, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })

module.exports = router