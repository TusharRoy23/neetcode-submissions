class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const score = [];
        let i = 0;
        const op = operations;

        while (i < op.length) {
            const scoreLen = score.length;

            if (op[i] === 'D') {
                const double = score[scoreLen - 1] * 2;
                score.push(double);
            } else if (op[i] === 'C') {
                score.pop();
            } else if (op[i] === '+') {
                const add = score[scoreLen - 1] + score[scoreLen - 2];
                score.push(add);
            } else {
                score.push(parseInt(op[i]));
            }
            i++;
        }
        return score.reduce((acc, curr) => acc + curr, 0);
    }
}
