function countingSort(arr, max) {
    if (arr.length < 2) return arr;
    let result = [];
    let count = new Array(max + 1).fill(0);
    
    for (let i = 0; i < arr.length; i++){
        count[arr[i]] += 1;
    }
    for (let i = 0; i < count.length; i++){
        while (count[i] > 0) {
            result.push(i);
            count[i] -= 1;
        }
    }
    return result;
}


module.exports = {
    countingSort
};