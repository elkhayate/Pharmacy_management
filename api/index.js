const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.use(cors({
    origin : "*"
}));


app.use(bodyParser.urlencoded({ extended : true }))

mongoose.connect("mongodb+srv://admin:admin123@cluster0.1vmjs.mongodb.net/?retryWrites=true&w=majority");

const drugSchema = {
    drug_name: String,
    price: Number,
    quantity: Number,
    category_name: String,
}

const saleSchema = {
    drug_name: String,
    quantity: Number,
    price: Number,
    category_name: String,
}

const Drug = mongoose.model('drug', drugSchema);
const Sale = mongoose.model('sale', saleSchema);


app.route('/api/drugs')
.get(function(req, res) {
    Drug.find({}, function(err, foundDrugs) {
        if (err) {
            res.send(err);
        } else {
            res.send(foundDrugs);
        }
    })
})
.post(function(req, res) {
    let newDrug = new Drug({
        drug_name: req.body.drug,
        price: req.body.price,
        quantity: req.body.quantity,
        category_name: req.body.category,
    });

    newDrug.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send('drug added !');
        }
    })
})

app.route('/api/sold')
.get(function(req, res) {
    Sale.find({}, function(err, foundSold) {
        if (err) {
            res.send(err);
        } else {
            res.send(foundSold);
        }
    })
})
.post(function(req, res) {
    const query = {_id: req.body.id}
    Drug.findOne(query, function(err, drugFound) {
        if (err) {
            res.send('not Found!')
        } else {
            drugFound.quantity -= req.body.quantity;
            drugFound.save()
            res.send('done!')
        }
    })
    
    
   
})


app.listen(PORT, function() {
    console.log(`Server run on port : ${PORT}`);
})
