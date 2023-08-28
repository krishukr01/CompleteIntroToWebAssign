// Write a function mergeSorted which merges two sorted arrays into a sorted array with the time complexity of O(n) and space complexity of O(n).
// assert(mergeSorted([1, 3, 5], [2, 4]) == [5, 4, 3, 2, 1])

let arr1 = [1, 3, 5];
let arr2 = [2, 4];

const mergeSorted = (arr1, arr2) => {
  let result = [...arr1, ...arr2].sort((a, b) => b - a);
  return result;
};

console.log(mergeSorted(arr1, arr2));
