import { Router } from 'express';
import {
  getTestCases,
  createTestCase,
  getTestCaseById,
  updateTestCase,
  deleteTestCase,
} from '../controllers/testCase.controller';

const router = Router();

router.get('/', getTestCases);
router.post('/', createTestCase);
router.get('/:id', getTestCaseById);
router.put('/:id', updateTestCase);
router.delete('/:id', deleteTestCase);

export default router;
