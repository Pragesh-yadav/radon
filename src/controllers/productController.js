const productModel = require("../models/productModel")

const createProduct = function (req, res) {
    let productData = req.body
    let saveProduct = await productModel.create(productData)

    req.send({msg:saveProduct })
}

module.exports.createProduct = createProduct