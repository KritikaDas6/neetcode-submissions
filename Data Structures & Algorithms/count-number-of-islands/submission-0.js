class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;
        
        let islandCount = 0;
        const rows = grid.length;
        const cols = grid[0].length;
        
       //look for 
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              
                if (grid[r][c] === '1') {
                    islandCount++;
                //incoreect
                    this.dfs(grid, r, c, rows, cols);
                }
            }
        }
        
        return islandCount;
    }

    /**
     */
    dfs(grid, r, c, rows, cols) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
        }
        
        grid[r][c] = '0';
        
        this.dfs(grid, r + 1, c, rows, cols); // Down
        this.dfs(grid, r - 1, c, rows, cols); // Up
        this.dfs(grid, r, c + 1, rows, cols); // Right
        this.dfs(grid, r, c - 1, rows, cols); // Left
    }
}