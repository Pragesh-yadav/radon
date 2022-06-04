const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
     }, // Book name should be same but Auther name is different.
    autherName:{
        type: String,
        unique: true,
        required: true
    },
    category: {
        type: String,
        enum: ["Eduction", "Action", "Classics", "Mystery", "Horror","Drama"]
    },
    year: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Book', bookSchema) //books


// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array