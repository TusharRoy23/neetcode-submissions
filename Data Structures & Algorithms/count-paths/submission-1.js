class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const ROW = m;
        const COL = n;
        const path = new Map();

        const move = (row, col) => {
            if (row === ROW - 1 && col === COL - 1) return 1;
            if (row > ROW - 1 || col > COL - 1) return 0;
            if (path.get(`${row},${col}`)) return path.get(`${row},${col}`);

            // right
            const right = move(row, col + 1);
            // down
            const down = move(row + 1, col);
            
            const sum = right + down;
            path.set(`${row},${col}`, sum);
            return sum;
        }
        
        // move down or right
        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                move(row, col);
            }
        }

        return path.get(`0,0`) || 1;
    }
}
