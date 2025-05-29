import { Request, Response } from 'express';
import { TestCase } from '../models/testCase.model';

let testCases: TestCase[] = [];
let idCounter = 1;

export const getTestCases = (req: Request, res: Response) => {
  res.json(testCases);
};

export const createTestCase = (req: Request, res: Response) => {
  const testCase: TestCase = { id: idCounter++, ...req.body };
  testCases.push(testCase);
  res.status(201).json(testCase);
};

export const getTestCaseById = (req: Request, res: Response) => {
  const testCase = testCases.find(tc => tc.id === parseInt(req.params.id));
  if (testCase) {
    res.json(testCase);
  } else {
    res.status(404).json({ message: 'Test case not found' });
  }
};

export const updateTestCase = (req: Request, res: Response) => {
  const index = testCases.findIndex(tc => tc.id === parseInt(req.params.id));
  if (index !== -1) {
    testCases[index] = { ...testCases[index], ...req.body };
    res.json(testCases[index]);
  } else {
    res.status(404).json({ message: 'Test case not found' });
  }
};

export const deleteTestCase = (req: Request, res: Response) => {
  const index = testCases.findIndex(tc => tc.id === parseInt(req.params.id));
  if (index !== -1) {
    const deleted = testCases.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Test case not found' });
  }
};
