class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const result = new Array(nums1.length).fill(0);
        const numMap = new Map();

        for (let i = 0; i < nums1.length; i++) {
            numMap.set(nums1[i], i);
        }

        const lookForBigger = (num, j) => {
            while (j < nums2.length) {
                if (nums2[j] > num) {
                    return nums2[j];
                }
                j++;
            }
            return -1;
        }

        for (let i = 0; i < nums2.length; i++) {
            const idx = numMap.get(nums2[i]);
            if (idx != undefined) {
                result[idx] = lookForBigger(nums2[i], i + 1);
            }
        }

        return result;
    }
}
