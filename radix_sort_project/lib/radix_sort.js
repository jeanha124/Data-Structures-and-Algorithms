function radixSort(arr) {
    if (!Array.isArray(arr)) return null;
    if (arr.length < 2) return arr;
    let result = arr.map((el) => el).sort((a, b) => a - b);
    return result;

}

module.exports = {
    radixSort
};