import express from 'express';
import { getCategories, getCompetitionDetail } from '../controllers/competitionController.js';

const router = express.Router();

router.get('/getCategories', getCategories);
router.get('/:id', getCompetitionDetail);

export default router;