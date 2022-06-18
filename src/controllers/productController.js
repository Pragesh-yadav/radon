const productModel = require("../models/productModel")

const createProduct = async function (req, res) {
    let productData = req.body
    let saveProduct = await productModel.create(productData)

    res.send({msg:saveProduct })
}

module.exports.createProduct = createProduct