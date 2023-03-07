class MazeSolver {
  private maze: number[][];
  private sol: number[][];

  constructor(maze: number[][]) {
    this.maze = maze;
    this.sol = new Array(maze.length).fill([])
      .map(() => new Array(maze[0].length).fill(0));
  }

  private printSolution(): void {
    for (let i = 0; i < this.maze.length; i++) {
      let row = "";
      for (let j = 0; j < this.maze[0].length; j++) {
        row += ` ${this.sol[i][j]} `;
      }
    }
  }

  private isSafe(x: number, y: number): boolean {
    return x >= 0 && x < this.maze.length &&
           y >= 0 && y < this.maze[0].length &&
           this.maze[x][y] === 1;
  }

  public solveMaze(): boolean {
    if (!this.maze?.length || this.solveMazeUtil(0, 0) === false) {
      return false;
    }
    this.printSolution();
    return true;
  }

  private solveMazeUtil(x: number, y: number): boolean {
    if (x === this.maze.length - 1 && y === this.maze[0].length - 1
        && this.maze[x][y] === 1) {
      this.sol[x][y] = 1;
      return true;
    }

    if (this.isSafe(x, y) === true) {
      if (this.sol[x][y] === 1) {
        return false;
      }

      this.sol[x][y] = 1;

      if (this.solveMazeUtil(x + 1, y)) {
        return true;
      }

      if (this.solveMazeUtil(x, y + 1)) {
        return true;
      }

      if (this.solveMazeUtil(x - 1, y)) {
        return true;
      }

      if (this.solveMazeUtil(x, y - 1)) {
        return true;
      }

      this.sol[x][y] = 0;
      return false;
    }

    return false;
  }

  getSolution(): number[][] {
    return this.sol;
  }
}

export default MazeSolver
