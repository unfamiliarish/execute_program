function join(arr, separator = ',') {
    if (arr.length === 0) {
        return '';
    }
    return arr.reduce((acc, x) => acc + separator + x);
}

function assert(test, expected) {
    if (test !== expected) {
        console.warn(`${test} !== ${expected}`);
    }
}

assert(join([]), '')
assert(join(['a']), 'a')