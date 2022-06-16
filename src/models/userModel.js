const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance: Number,
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    isFreeAppUser: {
        type: Boolean,
        default: false
    }

    
    
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array