import { Request, Response } from "express";
import Sudoku from "../models/sudokuSolver";

class SudokuController {
  public solve(req: Request, res: Response) {
    const board = req.body.board;
    const sudoku = new Sudoku(board);

    if (sudoku.solve()) {
      res.status(200).json({ solution: sudoku.getBoard() });
    } else {
      res.status(400).json({ error: "Invalid Sudoku board" });
    }
  }
}

export default SudokuController;
