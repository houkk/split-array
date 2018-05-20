/**
 * @description split up arr and each n item
 * @param {*} arr  
 * @param {*} n 
 */
var splitUp = (arr, n) => {
    var rest = arr.length % n; // how much to divide
    var arrayCount = Math.floor(arr.length / n);
    var result = [];

    for(var i = 0; i < arrayCount; i ++) {
        var start = n * i;
        var end = n * (i + 1);
        result.push(arr.slice(start, end)); // part of the array
    }
    if(rest) result.push(arr.slice(n * arrayCount))
    return result;
}
module.exports = splitUp;