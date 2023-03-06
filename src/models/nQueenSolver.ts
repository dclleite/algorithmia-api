class NQueensSolver {
  private n: number;
  private board: number[][];

  constructor(n: number) {
    this.n = n;
    this.board = [];
    for (let i = 0; i < n; i++) {
      this.board[i] = new Array(n).fill(0);
    }
  }

  public solve(): number[][] {
    this.placeQueens(0);
    const solution: number[][] = [];
    for (let row = 0; row < this.n; row++) {
      for (let col = 0; col < this.n; col++) {
        if (this.board[row][col] === 1) {
          solution.push([row, col]);
        }
      }
    }
    return solution;
  }

  private placeQueens(row: number): boolean {
    if (row === this.n) {
      return true;
    }
    for (let col = 0; col < this.n; col++) {
      if (this.isSafe(row, col)) {
        this.board[row][col] = 1;
        if (this.placeQueens(row + 1)) {
          return true;
        }
        this.board[row][col] = 0;
      }
    }
    return false;
  }

  private isSafe(row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      if (this.board[i][col] === 1) {
        return false;
      }
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (this.board[i][j] === 1) {
        return false;
      }
    }
    for (let i = row, j = col; i >= 0 && j < this.n; i--, j++) {
      if (this.board[i][j] === 1) {
        return false;
      }
    }
    return true;
  }
}
export default NQueensSolver;
