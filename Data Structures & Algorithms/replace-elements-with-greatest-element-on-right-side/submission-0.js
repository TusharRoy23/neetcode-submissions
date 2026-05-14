class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;
        let i = arr.length - 1;

        while (i > -1) {
            const tmp = arr[i];
            arr[i] = max;
            max = Math.max(tmp, max);
            i--;
        }
        return arr;
    }
}
