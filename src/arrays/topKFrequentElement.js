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
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} k
//      * @return {number[]}
//      */
//     topKFrequent(nums, k) {
//         // Declare a dictionary / hashmap to store frequencies of character
//         const frequencies = new Map();

//         // for (let i = 0; i < nums.length; i++)
//         // {
//         //     // Get the value in an array
//         //     const val = nums[i];
//         //     if (frequencies[val])
//         //     {
//         //         frequencies[val]++;
//         //     } else {
//         //         frequencies[val] = 1;
//         //     }
//         // }

//         // Use || 0 to prevent undefined
//         for (const num of nums)
//         {
//             frequencies.set(num, (frequencies.get(num) || 0) + 1);
//         }
//         // Convert the frequency object into an array of [value, count] pairs
//         // const array = Object.entries(frequencies);

//         const array = Array.from(frequencies);
//         // Compare decesding
//         array.sort((a,b) => b[1] - a[1]);
//         const slicedArray = array.slice(0,k);
//         return slicedArray.map(x => x[0]);

//     }
// }

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Step 1: Count Frequency (HashMap)
        // Map allows us to link a Number -> Count
        const frequencies = new Map();
        for (const num of nums) {
            // (frequencies.get(num) || 0) handles the case where num is new (undefined)
            frequencies.set(num, (frequencies.get(num) || 0) + 1);
        }

        // Step 2: Create "Frequency Buckets"
        // Index of the array = Frequency count.
        // Value at that index = Array of numbers with that frequency.
        // We need 'nums.length + 1' so we have an index for the max possible frequency.
        // We use '() => []' to ensure every bucket gets its OWN independent empty array.
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        // Step 3: Fill the Buckets
        // We iterate over our map. 'const [num, count]' extracts the Key and Value instantly.
        for (const [num, count] of frequencies) {
            // If number 50 appears 3 times...
            // We go to index 3 (buckets[3]) and push 50 into it.
            // Result: buckets[3] might look like [50, 20] if both appeared 3 times.
            buckets[count].push(num);
        }

        const result = [];

        // Step 4: Harvest the Results
        // We walk BACKWARDS from the end of the array (Highest Index = Highest Frequency)
        // We stop at i > 0 because frequency 0 is impossible/irrelevant.
        for (let i = buckets.length - 1; i > 0; i--) {
            
            // Step 4a: Check inside the bucket
            // 'buckets[i]' is a list of numbers. There might be 0, 1, or many numbers here.
            for (const n of buckets[i]) {
                result.push(n);
                
                // Step 4b: Stop immediately once we have k numbers
                // This makes the algorithm efficient because we don't finish the loop unnecessarily.
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
