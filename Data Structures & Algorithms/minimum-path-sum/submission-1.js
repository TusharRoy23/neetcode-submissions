class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const ROW = grid.length;
        const COL = grid[0].length;
        const path = new Map();

        const move = (row, col) => {
            if (row > ROW - 1 || col > COL - 1) return Infinity;
            if (row === ROW - 1 && col === COL - 1) return grid[row][col];
            if (path.get(`${row},${col}`) != undefined) return path.get(`${row},${col}`);

            const right = move(row, col + 1);
            const down = move(row + 1, col);
            const min = Math.min(right, down);

            const sum = (min === Infinity ? 0 : min) + grid[row][col];
            path.set(`${row},${col}`, sum);
            return sum;
        }

        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                move(row, col);
            }
        }

        return path.get(`0,0`) || grid[0][0];
    }
}
