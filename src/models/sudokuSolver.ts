class SudokuSolver {
  private board: number[][];

  constructor(board: number[][]) {
    this.board = board;
  }

  public solve(): boolean {
    if(!this.board?.length) return false
    
    const emptyCell = this.findEmptyCell();
    if (!emptyCell) {
      return true;
    }

    const [row, col] = emptyCell;
    for (let num = 1; num <= 9; num++) {
      if (this.isSafe(row, col, num)) {
        this.board[row][col] = num;
        if (this.solve()) {
          return true;
        }
        this.board[row][col] = 0;
      }
    }

    return false;
  }

  private findEmptyCell(): [number, number] | null {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (this.board[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return null;
  }

  private isSafe(row: number, col: number, num: number): boolean {
    return (
      this.isSafeRow(row, num) &&
      this.isSafeCol(col, num) &&
      this.isSafeBox(row - (row % 3), col - (col % 3), num)
    );
  }

  private isSafeRow(row: number, num: number): boolean {
    for (let col = 0; col < 9; col++) {
      if (this.board[row][col] === num) {
        return false;
      }
    }
    return true;
  }

  private isSafeCol(col: number, num: number): boolean {
    for (let row = 0; row < 9; row++) {
      if (this.board[row][col] === num) {
        return false;
      }
    }
    return true;
  }

  private isSafeBox(startRow: number, startCol: number, num: number): boolean {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.board[startRow + row][startCol + col] === num) {
          return false;
        }
      }
    }
    return true;
  }

  public getBoard(): number[][] {
    return this.board;
  }
}

export default SudokuSolver
