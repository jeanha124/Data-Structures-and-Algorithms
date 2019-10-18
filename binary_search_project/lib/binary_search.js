function binarySearch(array, target) {
    if (array.length < 1) return false;

    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid),
        right = array.slice(mid + 1);
    if (target < array[mid]) {
        return binarySearch(left, target);
    } else if (target > array[mid]) {
        return binarySearch(right, target);
    } else {
        return true;
    }  
    
}

function binarySearchIndex(array, target) {
    if (array.length < 1) return -1;

    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid),
        right = array.slice(mid + 1);
    if (target === array[mid]) {
        return mid;
    } else if (target < array[mid]) {
        return binarySearchIndex(left, target);
    } else if (target > array[mid]) {
        return binarySearchIndex(right, target);
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};