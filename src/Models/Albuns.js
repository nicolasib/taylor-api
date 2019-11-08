const mongoose = require('../Database/index')

const AlbumSchema = new mongoose.Schema({
    albumName: {
        type: String,
        require: true
    },
    albumSize: {
        type: String,
        require: true
    },
    songs: [
        {
            name: {
                type: String,
                require: true
            },
            duration: {
                type: String,
                require: true
            },
            description: {
                type: String,
                require: false
            },
            url: {
                type: String,
                require: true
            },
        }
    ],
    url: {
        type: String,
        require: false
    }
})

const Albuns = mongoose.model('Albuns', AlbumSchema)

module.exports = Albuns