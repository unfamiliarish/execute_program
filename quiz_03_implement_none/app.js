function none(arr, callback) {
    return !(arr.some(el => callback(el) === true));
}

function assert(test, expected) {
    if (test !== expected) {
        console.warn(`${test} !== ${expected}`);
    }
}

assert(none([1, 2, 4], n => n === 3), true);
assert(none([1, 2], n => n === 2), false);
assert(none(['a', 'bc', 'def'], s => s.length === 0), true);
assert(none([], s => false), true);
assert(none([], s => true), true);


