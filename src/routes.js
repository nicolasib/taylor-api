const express = require('express')

const routes = express.Router()

const  AlbumController = require('./Controllers/AlbumController')

routes.post('/registerAlbum', AlbumController.store)
routes.post('/listAlbuns', AlbumController.index)

module.exports = routes
