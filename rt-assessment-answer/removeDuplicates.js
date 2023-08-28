// Write a function to remove duplicates from a sorted array. Use any language of your choice.

// assert(unique([1, 1, 1, 2, 2, 3, 4, 5, 5]) == [1, 2, 3, 4, 5])

const arr = [1, 1, 1, 2, 2, 3, 4, 5, 5];

const unique = (arr) => {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (!stack.includes(arr[i])) {
      stack.push(arr[i]);
    }
  }
  return stack;
};

console.log(unique(arr));
