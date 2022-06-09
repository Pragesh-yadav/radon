const publisherModel = require("../models/publisherModel")


const createPublisher = async function(req, res) {
    const publish = req.body
    const createPublish = await publisherModel.create(publish)
    res.send({ msg:  createPublish })
}

module.exports.createPublisher = createPublisher