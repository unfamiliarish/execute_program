function rotate(arr) {
    if (arr.length === 0) {
        return [];
    }
    arr.unshift(arr.pop());
    return arr;
}

function assert(test, expected) {
    console.log(test);
    if (test !== expected) {
        console.warn(`${test} !== ${expected}`);
    }
}

assert(rotate([]), []);