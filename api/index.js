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
    name_type: String,
    drug_name: String,
    price: Number
}

const categorySchema = {
    category_name: String,
    data: [drugSchema],
}

const Category = mongoose.model('category', categorySchema);

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
    let newCate = new Category({
        category_name: req.body.title,
        data: req.body.data,
    })
    newCate.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send('Category added !')
        }
    })
})


app.listen(PORT, function() {
    console.log(`Server run on port : ${PORT}`);
})
