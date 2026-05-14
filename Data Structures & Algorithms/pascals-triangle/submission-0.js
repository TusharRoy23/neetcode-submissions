class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const result = [];
        const rows = numRows;
        let i = 0;

        while (i < rows) {
            const res = result.length > 0 ? result[result.length - 1] : [];
            const temp = [1]
            for (let j = 0; j < res.length; j++) {
                const sum = (j + 1) < res.length ? res[j + 1] : 0;
                temp.push(sum + res[j])
            }
            result.push(temp);
            i++;
        }
        return result;
    }
}
