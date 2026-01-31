// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true

// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false

// Explanation: "tabacat" is not a palindrome.

// Constraints:

//     1 <= s.length <= 1000
//     s is made up of only printable ASCII characters.

/**
 * Solution 1: Brute-force. Creating a new string, normalizing it, and then reverse it and compare to check for equality
 */
// class Solution {
//     /**
//      * @param {string} s
//      * @return {boolean}
//      */
//     isPalindrome(s) {
//        // Normalize: lowercase, then remove all non-alphanumeric characters (keep only a-z and 0-9)
//         let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//         // Turn a string into an array of characters, reverse the array, join it back into a new string
//         let newString = cleanedString.split("").reverse().join("");
//         return cleanedString === newString
//     }
// }

/**
 * Solution 2: Using two-pointer approach to compare all the start and end character of the string.
 */
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Clean string by convert it to lower case and replace everything except a to z and 0 to 9 with white space, apply global not just in the first character
        let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g,"");
        let l = 0;
        let r = cleanedString.length - 1;
        while (l < r)
        {
            if (cleanedString[l] === cleanedString[r])
            {
                l++;
                r--;
            } else {
                return false;
            }
        }
        return true;
    }
}
