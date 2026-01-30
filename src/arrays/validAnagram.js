// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true

// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

// Constraints:

//  s and t consist of lowercase English letters.

// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     // Solution 1: Brute force, sorting two arrays and then compare it, if it does, then return true, return false in reverse.
//     isAnagram(s, t) {
//         // Turn a string into an array of characters, sort that array (by default is in dictionary order), and convert it back into a new string.
//         let newArr = Array.from(s).sort().join('');
//         let newArr2 = Array.from(t).sort().join('');
           // Check two strings to check if it is match, return 0
//         if (newArr.localeCompare(newArr2) == 0) {
//             return true;
//         }
//         return false;
//     }
// }

/**
 * Approach: Frequency counting (26 letters)
 *
 * Two strings are anagrams if:
 *  - they have the same length
 *  - for every letter, the number of times it appears is the same in both strings
 *
 * Instead of sorting (O(n log n)), we count letters (O(n)).
 *
 * Idea:
 *  - Make an array `count[26]` where each slot stores the frequency of a letter:
 *      count[0] = how many 'a'
 *      count[1] = how many 'b'
 *      ...
 *      count[25] = how many 'z'
 *
 * Steps:
 *  1) If lengths differ -> impossible -> return false
 *  2) Scan s: for each char, increment its bucket
 *  3) Scan t: for each char, decrement its bucket
 *        - If any bucket becomes negative, t used a letter more times than s has -> not an anagram -> return false
 *  4) If we finish without negatives, return true:
 *        - lengths are equal, and we never "overused" any letter, so counts must match exactly
 *
 * Assumption:
 *  - Works for lowercase letters 'a' to 'z' only.
 */
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // If lengts of two arrays are not the same size, return false immediately
        if (s.length != t.length)
            return false;

        // Create an count array of 26 fill with 0, 26 represents for 26 lowercase characteres.
        const count = new Array(26).fill(0);
        
        // Convert letters to indices 0..25 using ASCII/Unicode codes:
        // 'a' -> 97, 'b' -> 98, ... 'z' -> 122
        // index = code(letter) - code('a')
        const base = "a".charCodeAt(0);
       
        // Count letters in s
        for (let i = 0; i < s.length; i++)
        {
            const index = s[i].charCodeAt(0) - base; // 'a'->0, 'b'->1, ...
            count[index]++;
        }
       
        // Remove letters using t
        for (let i = 0; i < t.length; i++) {
            const index = t[i].charCodeAt(0) - base;
            count[index]--;
            // If negative, t has more of this letter than s does
            if (count[index] < 0) return false;
        }
        return true;    
    }
}
