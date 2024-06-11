//******************************** */
//**           TWO SUM             */
//******************************** */

//naive, brute force: loop through all of them until there is a match - O(n^2)
//better: create a hash map to check for the correct match - O(n) because it only goes through each once but memory is also O(n) because we're using space to create the hash map

//1. map the value: index (CHECK AS YOU GO for the target - element and THEN add it to the map)
//2. return the indices

//example to try: ([2,7,11,15], 9) -- expected: [0,1]

var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in map) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }

  //     indices = []
  //     targetMet = false
  //     i = 0
  //     x = i + 1

  //     while(targetMet === false && i < nums.length){
  //         if (nums[i] + nums[x] === target){
  //             indices.push(i, x)
  //             targetMet = true
  //         } else if (x < nums.length -1){
  //             x++
  //         } else {
  //             i++
  //             x = i + 1
  //         }
  //     }
  //     return indices
};
