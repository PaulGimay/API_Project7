import express from 'express'
import { getTest, postTest, addRoom, getRooms, getRoom, updateRoom, deleteRoom} from '../controllers/roomControllers.js'
import { catchErrors} from './../helpers.js'
// nous allons nous créer un router
const router = express.Router()

// Pour avoir la page d'accueil


router.get('/', (_, res) => {

    res.send('Hello les Hardcoders')
})

// si req n'est pas utilisé nous pouvons mettre le underscore

// Nous allons pouvoir mettre la route directement avec sa fonction avec getTest et postTest

router.get('/test', getTest)

// La page va nous envoyer ce qu'on nous avons récupéré dans la requête

router.post('/test', postTest)

router.post('/room', catchErrors(addRoom))

router.get('/room/:id', catchErrors(getRoom))

router.patch('/room/:id', catchErrors(updateRoom))

router.delete('/room/:id', catchErrors(deleteRoom))

router.get('/rooms', catchErrors(getRooms))




// Il faut l'exporter le router
export default router 