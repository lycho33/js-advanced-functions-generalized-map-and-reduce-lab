// Add your functions here
// function map(src, callback) {
//     let newArray = []
//     for (let i = 0; i < src.length; i++) {
//         newArray.push(callback(src[i]))
//     }
//     return newArray
// }

// function reduce(src, callback, startingPoint = 0){
//     let total = startingPoint

//     if (startingPoint) {
//         for (let i = 0; i < src.length; i++) {
//             total = callback(total, src[i])
//         }
//         return total
//     } else {
//         total = src[0]
//         for (let i = 
//             0; i < src.length; i++) {
//             total = callback(total, src[i])
//         }
//         return total
//     }
// }

function map(array, callback){
    let r = []
    for (let i = 0; i < array.length; i++){
        r.push(callback(array[i]))
    }
    return r
}