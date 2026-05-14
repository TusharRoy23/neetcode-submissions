class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const result = [];
        let i = 0;
        const lookForBigger = (num, j) => {
            while (j < nums2.length) {
                if (nums2[j] > num) {
                    return nums2[j];
                }
                j++;
            }
            return -1;
        }

        while (i < nums1.length) {
            const num = nums1[i];
            let j = 0;
            while (j < nums2.length) {
                if (nums2[j] === num) {
                    result.push(lookForBigger(num, j + 1));
                }
                j++;
            }
            
            i++;
        }

        return result;
    }
}
