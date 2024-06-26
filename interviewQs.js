//******************************** */
//**           TWO SUM             */ <------------------- Reviewed July 1, 2024 (do again soon)
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

//******************************** */
//**      PALINDROME NUMBER        */ <------------------- Reviewed July 1, 2024 (do again soon)
//******************************** */
//Naive/easy - convert to string and use pointers OR split/reverse/join
//better -
//1. if it's negative, return false
//2. find a divider that is greater than or equal to the initial integer (use while loop)
//3. while the integer is not falsey:  right = x % 10, left = x/div
//4. if left!= right, return false; otherwise chop off end digits (x = (x%div)/10)
//5. re establish correct divider (div/100)
//6. return true outside
var isPalindrome = function (x) {
  //BEST - not using string

  if (x < 0) return false;
  if (x < 10) return true;

  let div = 1;
  while (x / div >= 10) {
    div = div * 10;
  }

  while (x > 0) {
    let right = x % 10;
    let left = Math.floor(x / div);

    if (left != right) {
      return false;
    } else {
      x = Math.floor((x % div) / 10);
      div = div / 100;
    }
  }
  return true;

  //SLIGHTLY LESS NAIVE
  //     x = x.toString()
  //     let i = 0
  //     let j = x.length -1

  //     if (x < 0) return false

  //     while (i<j){
  //         if (x.charAt(i) != x.charAt(j)) {
  //             return false
  //         } else {
  //             i++
  //             j--
  //         }
  //     }
  //     return true

  //MOST NAIVE
  //         let y = x.toString().split("").reverse().join("")
  //     if (x == y){
  //         return true
  //     } else {
  //         return false
  //     }
};

//******************************** */
//**      ROMAN TO INTEGER         */
//******************************** */
//Naive - the giant pile of horseshit I wrote
//better - use a hash map and keep in mind that if the number is followed by a greater number, it should be considered a negative

var romanToInt = function (s) {
  let result = 0;

  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let i = 0; i < s.length; i++) {
    let num = map[s.charAt(i)];
    let nextNum = map[s.charAt(i + 1)];
    if (num >= nextNum || !nextNum) {
      result = result + num;
    } else {
      result = result - num;
    }
  }
  return result;
};

//******************************** */
//**      LONGEST COMMON PREFIX         */
//******************************** */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }

  return prefix;

  //     let prefix = strs[0]

  //     for (let i=1; i<strs.length; i++) {
  //         while(strs[i].indexOf(prefix) !== 0){
  //             prefix = prefix.substring(0, prefix.length - 1)
  //             if (prefix === "") {
  //                 return ""
  //             }
  //         }
  //     }
  //    return prefix
};

//******************************** */
//**      REMOVE ELEMENT         */
//******************************** */
//create a pointer starting at 0
//iterate through nums
//if it is the value, do nothing
//if it is not, move it to the pointer's location and increase the pointer
//O(n) because it will go through each element once - so the time increases in direct proportion to the length of nums

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

/************************************** */
/**        Majority Element            */
/************************************** */

var majorityElement = function (nums) {
  let map = {};
  let maj = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (map[nums[j]] > maj) {
      return nums[j];
    }
  }
};
