// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true


// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     // Solution 1: Use two loops to iterate through elements, outer loops for checking first element, innter loops checking second element and compare if they are equal.
//     // Complexity: O(n^2)
//     hasDuplicate(nums) {
//         let n = nums.length
//         for(let i = 0; i < n; i++) {
//             for (let j = i + 1; j < n; j++)
//             {
//                 if(nums[i] == nums[j])
//                 {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }
// }

/**
 * Solution 2: Using Set in JavaScript
 * Idea: Iterate the entire loops. After that creating a new set and check if it have already appeared in the set. If it is, return true immediately and if not, then 
 * add to the set and continue to iterate throught the loop.
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let seen = new Set();
       // In case duplicated number needed to be printed out.
       let duplicate = [];
       for (let i = 0; i < nums.length; i ++)
       {
        if (seen.has(nums[i])) {
            // Push to an array in case duplicated numbers to print out.
            duplicate.push(nums[i])
            return true;
        } else {
            seen.add(nums[i]);
        }
       }
       // Print out the duplicated number
       console.log(duplicate);
       return false;
    }
}

