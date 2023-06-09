function sortByLength(words) {
    // uses sort and slice
    // sort in place, shortest strings first 
    words.sort((w1, w2) => w1.length - w2.length)
}

sortByLength(["a", "big", "ox"])