// Write a function mergeSorted which merges two sorted arrays into a sorted array with the time complexity of O(n) and space complexity of O(n).
// assert(mergeSorted([1, 3, 5], [2, 4]) == [5, 4, 3, 2, 1])

let arr1 = [1, 3, 5];
let arr2 = [2, 4];

const mergeSorted = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result.reverse();
};
console.log(mergeSorted(arr1, arr2));
