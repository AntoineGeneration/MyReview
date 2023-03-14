const express = require('express');
const mongoose = require('mongoose');


const  saveProduct = require('../services/ProductService').saveProduct;
//const  saveComment = require('../services/CommentService').AddComment;
const staticProducts = require('../public/ProduitsStatic');
//const staticComments = require('../public/CommentairesStatic');
const Product = require('../models/produits').Produit;





const cors = require('cors');

const Commentaire = require('../models/Comments').Commentaire;
const connexion = require('../DAO/connexion').db

const app = express();
const port = process.env.PORT || 3007;
const productRouter=require('../routes/ProductRoute');
const commentRouter=require('../routes/CommentRoute').router;

const corsOptions = {
    origin: 'http://localhost:4200/produits'
};

app.use(cors());

const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/produits',productRouter.router);
app.use('/commentaires',commentRouter);




connexion.once('open', async () => {
    console.log('Connected to MongoDB');
    // Effacer les données existantes avant d'insérer de nouvelles données
    //await connexion.dropDatabase();

    // Enregistrer les produits statiques
   /* staticProducts.forEach(async (Data) => {
        const product = new Product(Data);
        await saveProduct(product);
    });*/

});

app.listen(port, () => {
    console.log(`Server listening on port`)

});