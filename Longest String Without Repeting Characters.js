/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Map to store the last seen position of each character
    const charIndex = new Map();
    // Maximum length found so far
    let maxLength = 0;
    // Start of the current window
    let start = 0;
    
    // Iterate through the string
    for (let end = 0; end < s.length; end++) {
        // If character is already in window, update start position
        if (charIndex.has(s[end]) && charIndex.get(s[end]) >= start) {
            start = charIndex.get(s[end]) + 1;
        }
        // Update maxLength if current window is larger
        maxLength = Math.max(maxLength, end - start + 1);
        // Update last seen position of current character
        charIndex.set(s[end], end);
    }
    
    return maxLength;
};