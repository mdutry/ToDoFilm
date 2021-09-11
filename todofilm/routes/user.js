const express = require('express')
const userController = require('../controllers/user')

const router = express.Router()

router.get('/api/user/:id', userController.recupInfoUser)
router.patch('/api/user/:id', userController.modifInfoUser)
router.patch('/api/user/:id/password', userController.modifPasswordUser)
router.delete('/api/user/:id', userController.deleteInfoUser)

router.patch('/api/user/:id/wishlist', userController.ajoutMovie)
router.delete('/api/user/:id/wishlistMovie/:movieid', userController.deleteMovie)
router.delete('/api/user/:id/wishlistSerie/:serieid', userController.deleteMovie)
router.delete('/api/user/:id/wishlistPerson/:personid', userController.deleteMovie)

module.exports = router