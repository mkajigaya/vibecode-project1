import { Request, Response } from 'express';
import { Bug } from '../models/bug.model';

let bugs: Bug[] = [];
let idCounter = 1;

export const getBugs = (req: Request, res: Response) => {
  res.json(bugs);
};

export const createBug = (req: Request, res: Response) => {
  const bug: Bug = { id: idCounter++, ...req.body };
  bugs.push(bug);
  res.status(201).json(bug);
};

export const getBugById = (req: Request, res: Response) => {
  const bug = bugs.find(b => b.id === parseInt(req.params.id));
  if (bug) {
    res.json(bug);
  } else {
    res.status(404).json({ message: 'Bug not found' });
  }
};

export const updateBug = (req: Request, res: Response) => {
  const index = bugs.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    bugs[index] = { ...bugs[index], ...req.body };
    res.json(bugs[index]);
  } else {
    res.status(404).json({ message: 'Bug not found' });
  }
};

export const deleteBug = (req: Request, res: Response) => {
  const index = bugs.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    const deleted = bugs.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Bug not found' });
  }
};
