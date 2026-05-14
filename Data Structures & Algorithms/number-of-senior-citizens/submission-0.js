class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let i = 0;
        let count = 0;

        while (i < details.length) {
            const age = parseInt(details[i].slice(11, 13)); 
            if (age > 60) count++;
            
            i++;
        }
        return count;
    }
}
