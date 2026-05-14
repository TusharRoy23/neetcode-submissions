class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const grid = new Map();
        const ROW = board.length;
        const COL = board[0].length;

        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                if (board[row][col] === '.') continue;

                const sqrKey = `${Math.floor(row/3)},${Math.floor(col/3)}`;

                const rowMap = rows.get(row);
                const colMap = cols.get(col);
                const gridMap = grid.get(sqrKey);

                if (
                    rowMap && rowMap.has(board[row][col]) ||
                    colMap && colMap.has(board[row][col]) ||
                    gridMap && gridMap.has(board[row][col])
                ) {
                    return false;
                }

                if (!rows.has(row)) rows.set(row, new Set());
                if (!cols.has(col)) cols.set(col, new Set());
                if (!grid.has(sqrKey)) grid.set(sqrKey, new Set());

                const blockValue = board[row][col];
                rows.get(row).add(blockValue);
                cols.get(col).add(blockValue);
                grid.get(sqrKey).add(blockValue);
            }
        }
        return true;
    }
}
