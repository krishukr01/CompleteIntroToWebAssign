// Write a function mergeSorted which merges two sorted arrays into a sorted array with the time complexity of O(n) and space complexity of O(n).
// assert(mergeSorted([1, 3, 5], [2, 4]) == [5, 4, 3, 2, 1])

let arr1 = [1, 3, 5];
let arr2 = [2, 4];

const mergeSorted = (arr1, arr2) => {
  let start = 0;
  let end = arr1.length - 1;
  let answer = [];

  while (start < end) {
    if (arr1[start] < arr2[end]) {
      answer.push(arr1[start]);
      start++;
    } else {
      answer.push(arr2[end]);
      end--;
    }
  }
  console.log(answer);
};

mergeSorted(arr1, arr2);
