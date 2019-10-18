function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i],
            j = i;
        while (j > 0 && temp < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j -= 1;
        }
        arr[j] = temp;
    }
    return arr;
}

module.exports = {
    insertionSort
};