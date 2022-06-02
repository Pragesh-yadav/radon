
const removeSapce = function() {
    let name = "   NodeJs Mentor is Sabiha Khan Ma'am   "
    console.log(name)
    console.log(name.trim())
}

const changetoLowerCase = function() {
    let lower = "FuNcTioN Is BesT"
    console.log(lower.toLowerCase())
}

const changetoUpperCase = function() {
    let Upper = "Daily standUp by Farheena Ma'am"
    console.log(Upper.toUpperCase())
}


module.exports.removeSapce = removeSapce
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase