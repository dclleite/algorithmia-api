import { Request, Response } from "express";
import Sudoku from "../models/sudokuSolver";

class SudokuController {
  public solve(req: Request, res: Response) {
    try {
      const board = (req.query.board as any[] || []).map((row)=> row.map(Number))

      const sudoku = new Sudoku(board);

      if (sudoku.solve()) {
        res.status(200).json({ solution: sudoku.getBoard() });
      } else {
        res.status(400).json({ error: "Invalid Sudoku board" });
      }
    } catch(err) {
      return res.status(500).send({ error: 'Internal server error' });
    }
  }
}

export default SudokuController;
