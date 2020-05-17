// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5
let nums1 = [3]
let nums2 = [-2,-1]

function median(arr1, arr2) {
  let combined = arr1.concat(arr2)
  combined.sort(function(a, b){
      return a - b;
  });
  if (combined.length % 2 == 0) {
    elementA = combined[(combined.length / 2) -1]
    elementB = combined[(combined.length / 2 )]
    return (elementA + elementB) / 2
  } else {
    index = Math.floor(combined.length / 2 )
    return combined[index]
  }
}

console.log(median(nums1, nums2))