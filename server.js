
import express from 'express'
import mongoose from 'mongoose'

// pour importer toutes routes/adresses qui se trouvent dans le router
import routes from './routes/routes.js'
import dotenv from 'dotenv'
// pour lancer dotenv
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

// Pour indiquer à l'application qu'elle doit utiliser des informations au format Json

app.use(express.json())


// connexion à la base en rajoutant quelques paramètres pour éviter que cela soit trop vite déprécié par rapport à l'API
mongoose.connect(process.env.MONGODB, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


// On va demander à express d'utiliser les routes
app.use(routes)

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
})