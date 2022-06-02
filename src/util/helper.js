let date = new Date()
const batch = 'Radon'
const printDate = function() {
    console.log(date)
}

const printMoth = function() {
    let month = date.getMonth()
    console.log(month)
}

const getBatchInfo = function() {
    console.log(batch + ", W3D3, the topic for today is Nodejs intoduction and module system")
}


module.exports.printDate = printDate
module.exports.printMoth = printMoth
module.exports.getBatchInfo = getBatchInfo