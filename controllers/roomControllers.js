// Il faut importer le model dans le controller
import RoomModel from '../models/roomModel.js'


export const getTest = (_, res) => {
    res.send({name: 'Hardcoders'})
}

export const postTest= (req, res) => {
    res.send(req.body)
}

// Pour ajouter une chambre
export const addRoom = async (req,res) => {

    const room = new RoomModel(req.body)
     // pour sauvegarder dans la base de données
    await room.save()
    res.send(room)

    // nous avons un try / catch car c'est ce que nous faisons avec async await

    // try {
    //     //mongoose va gérer l'enregistrement dans mongodb
    //     await room.save()
    //     res.send(room)
    // } catch (err) {
    //     //500 c'est une erreur 
    //     res.status(500).send(err)
    // }

}

// Read All

export const getRooms = async (req, res) => {
    const rooms = await RoomModel.find({})
    res.send(rooms)
}

// Real One

export const getRoom = async (req, res) => {
  
    
    const room = await RoomModel.find({_id : req.params.id})
    res.send(room)
}

// Update 

export const updateRoom = async (req, res) => {
 
    // body représente l'objet qu'on a envoyé
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
    // pour sauvegarder dans la base de données
    await room.save()
    res.send(room)
}

// Delete 

export const deleteRoom = async (req, res) => {
 
    // body représente l'objet qu'on a envoyé
    const room = await RoomModel.findByIdAndDelete(req.params.id)
    // Vérification si pas de room 
    if (!room) {
        res.status(404).send('Aucune chambre trouvée.')
    }
    res.status(200).send()
    
}






