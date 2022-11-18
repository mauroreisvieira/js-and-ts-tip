const array = [1, 2, 3, 4];  // [1, 2, 3, 4]

array.map((num) => num * 2); // [2, 4, 6, 8]
console.log(array); // [1, 2, 3, 4]

// reverse, sort and splice mutate!
export const backwards = array.reverse(); // [4, 3, 2, 1]
console.log(array); // [4, 3, 2, 1]

const dontTouchMe = [1, 2, 3, 4]; // [1, 2, 3, 4]

// reverse items
dontTouchMe.toReversed(); // [4, 3, 2, 1]

// sort items
dontTouchMe.toSorted(); // [1, 2, 3, 4]

// remove items
dontTouchMe.toSpliced(1,2); // [1, 4]

// replace item
dontTouchMe.with(1, '💩'); // [1, '💩', 3, 4];
