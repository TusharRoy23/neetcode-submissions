class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROW = board.length;
        const COL = board[0].length;

        const DFS = (row, col, i) => {
            if (i === word.length) return true;
            if (
                    row < 0 || 
                    col < 0 || 
                    row >= ROW || 
                    col >= COL || 
                    board[row][col] != word[i] ||
                    board[row][col] === '#'
                ) {
                return false;
            }

            board[row][col] = '#';
            const result = DFS(row, col + 1, i + 1) || 
                            DFS(row + 1, col, i + 1) || 
                            DFS(row, col - 1, i + 1) ||
                            DFS(row - 1, col, i + 1)

            board[row][col] = word[i];
            return result;
        }
        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
                if (DFS(r, c, 0)) return true;
            }
        }
        return false;
    }
}
