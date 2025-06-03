import { Router } from 'express';
import {
  getBugs,
  createBug,
  getBugById,
  updateBug,
  deleteBug,
} from '../controllers/bug.controller';

const router = Router();

router.get('/', getBugs);
router.post('/', createBug);
router.get('/:id', getBugById);
router.put('/:id', updateBug);
router.delete('/:id', deleteBug);

export default router;
