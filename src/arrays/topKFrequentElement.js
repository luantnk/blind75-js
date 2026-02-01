// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]

// Constraints:

//     1 <= nums.length <= 10^4.
//     -1000 <= nums[i] <= 1000
//     1 <= k <= number of distinct elements in nums.


/**
 * Solution 1: Brute-force approach
 * First, we will build a frequency table to count occurence of each number appear
 * After that, convert that table into a list (pair-list)
 * We will perform sort by frequency of this list (highest first)
 * Take the first k number in the sorted list
 */
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Declare a dictionary / hashmap to store frequencies of character
        const frequencies = new Map();

        // for (let i = 0; i < nums.length; i++)
        // {
        //     // Get the value in an array
        //     const val = nums[i];
        //     if (frequencies[val])
        //     {
        //         frequencies[val]++;
        //     } else {
        //         frequencies[val] = 1;
        //     }
        // }

        // Use || 0 to prevent undefined
        for (const num of nums)
        {
            frequencies.set(num, (frequencies.get(num) || 0) + 1);
        }
        // Convert the frequency object into an array of [value, count] pairs
        // const array = Object.entries(frequencies);

        const array = Array.from(frequencies);
        // Compare decesding
        array.sort((a,b) => b[1] - a[1]);
        const slicedArray = array.slice(0,k);
        return slicedArray.map(x => x[0]);

    }
}
