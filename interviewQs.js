//TO REVIEW AGAIN SOON

/************************************** */
// /**        MERGE SORTED ARRAY           *//REVIEWED: March 6, 2025
/************************************** */
//set variable for final element in nums1
//decrease m and n by 1 to get the indices
//check greater or less than starting with the last element in nums1 and replace/decrement where appropriate
var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;
  m--;
  n--;

  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[last] = nums1[m];
      m--;
    } else {
      nums1[last] = nums2[n];
      n--;
    }
    last--;
  }

  while (n >= 0) {
    nums1[last] = nums2[n];
    n--;
    last--;
  }
};

//******************************** */
//**           TWO SUM             */ <------------------- Reviewed March 6, 2025
//******************************** */

//naive, brute force: loop through all of them until there is a match - O(n^2)
//better: create a hash map to check for the correct match - O(n) because it only goes through each once but memory is also O(n) because we're using space to create the hash map

//1. map the value: index (CHECK AS YOU GO for the target - element and THEN add it to the map)
//2. return the indices

var twoSum = function (nums, target) {
  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    let match = target - nums[i];

    if (hash.has(match)) {
      return [i, hash.get(match)];
    } else {
      hash.set(nums[i], i);
    }
  }
};

//example to try: ([2,7,11,15], 9) -- expected: [0,1]

var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let match = target - nums[i];

    if (match in map) {
      return [i, map[match]];
    } else {
      map[nums[i]] = i;
    }
  }
};

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
// };

//******************************** */
//**      PALINDROME NUMBER        */ <------------------- Reviewed March 6, 2025
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
//**      ROMAN TO INTEGER         */ <------------------- Reviewed March 7, 2025
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

/************************************** */
// /**  Best time to buy and sell stock *// Reviewed March 7, 2025
/*******      ******************************* */

var maxProfit = function (prices) {
  let max = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      if (max < profit) {
        max = profit;
      }
    } else {
      left = right; //change it to the right one because it is a lower cost day
    }
    right++;
  }

  return max;
};

//O(n) ---> just going through the whole thing once

/************************************** */
// /**        Length of last word   */// REVIEWED Jan. 30, 2025
/************************************** */

var lengthOfLastWord = function (s) {
  let length = 0;
  let last = s.length - 1;

  while (last >= 0) {
    if (s.charAt(last) === " ") {
      last--;
    } else {
      length++;
      if (s.charAt(last - 1) === " ") {
        return length;
      } else {
        last--;
      }
    }
  }

  return length;
};

//OR

var lengthOfLastWord = function (s) {
  let split = s.split(" ");
  let last = split.length - 1;

  while (split[last] === "" || split[last] === " ") {
    last--;
  }

  return split[last].length;
};

//O(n) -- goes through string once and could potentially go through split array once

//REV NEXT

//******************************** */
//**      LONGEST COMMON PREFIX         */<------------------- Reviewed Feb. 11, 2025
//******************************** */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    //flower
    let char = strs[0].charAt(i);
    for (let string of strs) {
      if (i > string.length || char != string.charAt(i)) {
        return prefix;
      }
    }
    prefix = prefix + char;
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

/************************************** */
// /**  Find the Index of the first occurance in a string*/ -----> did Feb. 11, 2025
/************************************** */

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

/************************************** */
// /**        Valid Palindrome            */ ---------------- Feb. 11, 2025
/************************************** */

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let x = 0;
  let y = s.length - 1;

  while (x < y) {
    if (s.charAt(x) === s.charAt(y)) {
      x++;
      y--;
    } else {
      return false;
    }
  }
  return true;
};

// / and / → These slashes define the start and end of the regular expression.
// ^ (caret inside []) means "not" (negation).
// a-z means "all lowercase letters".
// 0-9 means "all digits from 0 to 9".
// So, [^a-z0-9] means "any character that is NOT a lowercase letter or a digit" (such as spaces, punctuation, and special characters).
// g → This is the global flag, which means replace all matches (not just the first one).

/************************************** */
// /**        Is Subsequence            */ ---------------- Feb. 11, 2025
/************************************** */
//use the first example to draw it out if you get stuck. It's not as hard as you're making it.

var isSubsequence = function (s, t) {
  if (s.length === 0) return true;

  let i = 0;
  let j = 0;

  while (j < t.length) {
    if (s[i] === t[j]) {
      if (i === s.length - 1) {
        return true;
      }
      i++;
      j++;
    } else {
      j++;
    }
  }

  return false;
};

/************************************** */
// /**        Ransom Note            */ ---- Reviewed Feb. 12, 2025 and got the same thing basically
/************************************** */

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  //create hm of magazine
  const hash = {};

  for (let i = 0; i < magazine.length; i++) {
    let char = magazine.charAt(i);
    if (char in hash) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  //iterate through ransomnote and check for charAt
  for (let j = 0; j < ransomNote.length; j++) {
    let char = ransomNote.charAt(j);
    if (char in hash && hash[char] != 0) {
      hash[char]--;
    } else {
      return false;
    }
  }

  return true;
};

/************************************** */
// /**        Isomorphic String   */ -----> Feb. 12, 2025
/************************************** */
var isIsomorphic = function (s, t) {
  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    if ((c1 in map1 && map1[c1] != c2) || (c2 in map2 && map2[c2] != c1)) {
      return false;
    } else {
      map1[c1] = c2;
      map2[c2] = c1;
    }
  }

  return true;
};

//O(n + m) - because we go through every element in each list once

/************************************** */
// /**       Word Pattern           */ -----> did Feb. 20, 2025
/************************************** */
/**NOTES: One of the tests includes "constructor" as a string, which fucks up setting map 1 to {} and not using the methods available through new Map(), which does not include "constructor" as a prototype property (has none)
So, remember:
map1.has(x) - instead of "x in map1"
map1.get(x) - to check for != or ===
map.set(x,y) - to set key x to val y
*/

var wordPattern = function (pattern, s) {
  s = s.split(" ");
  if (s.length !== pattern.length) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let x = pattern.charAt(i);
    let y = s[i];

    if (map1.has(x) && map1.get(x) !== y) return false;
    if (map2.has(y) && map2.get(y) !== x) return false;

    map1.set(x, y);
    map2.set(y, x);
  }

  return true;
};

/************************************** */
// /**        Valid Anagram            */ ---------------- Feb. 25, 2025
/************************************** */
//easy but need to keep reviewing Map methods

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j]) && map.get(t[j]) > 0) {
      map.set(t[j], map.get(t[j]) - 1);
    } else {
      return false;
    }
  }

  return true;
};

//******************************** */
//**           Contains Duplicate   II        */ <------------------- Reviewed Feb. 27, 2025
//******************************** */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (Math.abs(map.get(nums[i]) - i) <= k) {
        return true;
      } else {
        map.set(nums[i], i);
      }
    } else {
      map.set(nums[i], i);
    }
  }

  return false;
};

/************************************** */
// /**        Merge Two Sorted Lists            */ -----> did July 29, do again soooooon
/************************************** */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  tail = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next;
};

//-------------------------------PRETTY EASY - ONLY REVIEW AFTER OTHERS---------------------------------------------------------------

/************************************** */
// /**        Majority Element            */<------------------- Reviewed Jan. 30, 2025
/************************************** */

var majorityElement = function (nums) {
  let half = nums.length / 2;
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }

    if (map[nums[i]] > half) {
      return nums[i];
    }
  }
};

//******************************** */
//**      REMOVE ELEMENT         *//<------------------- Reviewed Jan. 30, 2025
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

//OR

var removeElement = function (nums, val) {
  let k = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
      k++;
    }
  }

  return k;
};

//******************************** */
//**   REMOVE DUPLICATES FROM SORTED ARRAY      *//<------------------- Reviewed Jan. 30, 2025
//******************************** */
var removeDuplicates = function (nums) {
  //1,1,2
  let k = nums.length;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
      k++;
    }
  }

  return k;
};

/************************************** */
// /**        Length of last word   */// REVIEWED Jan. 30, 2025
/************************************** */

var lengthOfLastWord = function (s) {
  let length = 0;
  let last = s.length - 1;

  while (last >= 0) {
    if (s.charAt(last) === " ") {
      last--;
    } else {
      length++;
      if (s.charAt(last - 1) === " ") {
        return length;
      } else {
        last--;
      }
    }
  }

  return length;
};

//OR

var lengthOfLastWord = function (s) {
  let split = s.split(" ");
  let last = split.length - 1;

  while (split[last] === "" || split[last] === " ") {
    last--;
  }

  return split[last].length;
};

//O(n) -- goes through string once and could potentially go through split array once
