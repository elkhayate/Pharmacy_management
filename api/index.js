const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.use(cors({
    origin : "*"
}));


app.use(bodyParser.urlencoded({ extended : false }))

mongoose.connect("mongodb+srv://admin:admin123@cluster0.1vmjs.mongodb.net/?retryWrites=true&w=majority");

const drugSchema = new mongoose.Schema({
    drug_name: String,
    price: Number,
    quantity: Number,
    category_name: String,
})

const categorySchema = {
    category_name: String,
    drugs: [drugSchema]
}

const saleSchema = {
    drug_name: String,
    quantity: Number,
    price: Number,
    category_name: String,
    date: Date,
}

const Drug = mongoose.model('drug', drugSchema);
const Category = mongoose.model('category', categorySchema);
const Sale = mongoose.model('sale', saleSchema);



app.route('/api/categories')
.get(function(req, res) {
    Category.find({}, function(err, foundCategories) {
        if (err) {
            res.send(err);
        } else {
            res.send(foundCategories);
        }
    })
})
.post(function(req, res) {
    const newCategory = new Category({
        category_name: req.body.name,
        drugs: [],
    })

    newCategory.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send('category added !');
        }
    })
})


app.route('/api/drug')
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
    const newItem = new Drug({
        drug_name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category_name: req.body.category,
    });
    
    Category.findOne({category_name: req.body.category}, function(err, foundCategory) {
        if (err) {
            res.send(err);
        }
        foundCategory.drugs.push(newItem);
        foundCategory.save();
        res.send('drug added!');
    })

    newItem.save();
})


app.route('/api/sold')
.get(function(req, res) {
    Sale.find({}, function(err, foundItems) {
        if (err) {
            res.send(err);
        } else {
            res.send(foundItems);
        }
    })
})
.post(function(req, res) {
    console.log(req)
    Category.findOne({category_name: req.body.category}, function(err, foundCategory) {
        if (err) {
            res.send(err);
        }
        foundCategory.drugs.map(drug => {
            return drug.drug_name === req.body.name
                ? drug.quantity -= req.body.quantity
                : drug;
        })

        foundCategory.save();
    })

    Drug.findOne({drug_name: req.body.name}, function(err, foundDrug) {
        if (err) {
            res.send(err);
        }
        foundDrug.quantity -= req.body.quantity;
        foundDrug.save();
    })
    const soldItem = new Sale({
        drug_name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        category_name: req.body.category,
        date: new Date(),
    });

    soldItem.save();
    res.send('item sold !');
})

app.listen(PORT, function() {
    console.log(`Server run on port : ${PORT}`);
})
