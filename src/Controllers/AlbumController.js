const Album = require('../Models/Albuns')

module.exports = {
    async store(req, res){
        const album = req.body

        try{
            const addAlbum = await Album.create(album)
            return res.json({ "response": "success" })
        }catch(err){
            return res.status(400).json({err})
        }
    },

    async index(req, res){
        const { query } = req.body
        
        try{
            switch(query){
                case 'all':
                    const all = await Album.find()
                    return res.json(all)
                break
                default:
                    const result = await Album.find({ albumName: query })
                    console.log(result.length)
                    if(result.length >= 1){
                        return res.json(result)
                    }else{
                        return res.json({ "error": "Álbum inexistente!" })
                    }
                break
            }
        }catch(error){
            res.json({ "message": error })
        }
        
    }
}