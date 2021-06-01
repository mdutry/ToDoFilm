// définition des modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const auth = require('./routes/auth.js')
const user = require('./routes/user.js')
const passwordReset = require('./routes/passwordReset.js')
const cors = require("cors");
const path = require("path")

// définition de dotenv pour une utilisation d'un fichier .env
const dotenv = require('dotenv')
dotenv.config()

// Connection de l'API à la base de données
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

// Définition de notre objet express nommé app
const app = express()

app.use(cors());

// gestion des routes avec React
app.use(express.static(path.resolve(__dirname, "./client/build")))

// Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
  });
app.use(urlencodedParser);
app.use(bodyParser.json())

// 

// Définition des CORS (Partage des ressources entre origines multiples)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Routes
app.use(auth)
app.use(user)
app.use(passwordReset)

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
})

// Définition et mise en place du port d'écoute
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})