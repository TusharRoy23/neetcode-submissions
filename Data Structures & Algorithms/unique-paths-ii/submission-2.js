class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const ROW = grid.length;
        const COL = grid[0].length;
        const path = new Map();

        const move = (row, col) => {
            if (row > ROW - 1 || col > COL - 1 || grid[row][col] === 1) {
                path.set(`${row},${col}`, 0);
                return 0;
            }
            if (row === ROW - 1 && col === COL - 1) {
                path.set(`${row},${col}`, 1);
                return 1;
            }
            if (path.get(`${row},${col}`) != undefined) return path.get(`${row},${col}`);

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
        console.log(path.get(`0,0`))
        // return path.get(`0,0`) != undefined ? path.get(`0,0`) : 1;
        return path.get(`0,0`)
    }
}
