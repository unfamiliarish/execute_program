/* 
  This quiz includes topics from these lessons: "Reverse", "Reduce right", 
  "Concat".
*/
function reverse(arr) {
    return arr.reduceRight((acc, curr) => acc.concat(curr), []);
}

function assert(test, expected) {
    console.log(test);
    if (test !== expected) {
        console.warn(`${test} !== ${expected}`);
    }
}

// jk, equals is a pain for arrays
assert(reverse([1]), [1]);
assert(reverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);