import mongoose from 'mongoose'

//
const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    maxPersons: {
        type: Number,
        // Nous allons mettre la valeur par défaut
        default: 1,
        // Une fonction pour valider 
        validate: value => {

            if(value <= 0){

                throw new Error ('La chambre doit pouvoir accueillir au moins une personne.')
            }
        }
    }
})

// Nous allons créer le model Room basé sur le schéma RoomSchema
const RoomModel = mongoose.model('Room', RoomSchema)

// On exporte ensuite le model
export default RoomModel