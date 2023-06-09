function hasNull(arr) {
    return arr.some(el => el === null);
}

function assert(test, expected) {
    console.log(test);
    if (test !== expected) {
        console.warn(`${test} !== ${expected}`);
    }
}

assert(hasNull([null, null]), true);
assert(hasNull([1, null, 3]), true);
assert(hasNull([]), false);
assert(hasNull([undefined]), false);
assert(hasNull(['null']), false);
assert(hasNull.toString().includes('some'), true);
