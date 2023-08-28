// Write the following function, that splits passed arr into two arrays, the first containing values smaller than the value and the second array containing values larger than the value.
// assert(partition([1, 4, 2, 5, 3, 7]) == [[1, 2], [4, 5, 7]])

let arr = [1, 4, 2, 5, 3, 7];
let value = 3;

const partition = (arr, value) => {
  let part1 = [];
  let part2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < value) {
      part1.push(arr[i]);
    } else if (arr[i] > value) {
      part2.push(arr[i]);
    }
  }
  console.log(part1, part2);
};

partition(arr, value);
