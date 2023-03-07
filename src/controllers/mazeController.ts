import { Request, Response } from 'express';
import MazeSolver from '../models/mazeSolver';

class MazeSolverController {
  public async solve(req: Request, res: Response): Promise<Response> {
    try {
      const maze = (req.query.maze as any[] || []).map((row)=> row.map(Number))

      const mazeSolver = new MazeSolver(maze);
      const hasSolution = mazeSolver.solveMaze();
      if (!hasSolution) {
        return res.status(400).send({ error: 'Solution does not exist' });
      }
      return res.send({ solution:  mazeSolver.getSolution() });
    } catch (err) {
      return res.status(500).send({ error: 'Internal server error' });
    }
  }
}

export default MazeSolverController;
