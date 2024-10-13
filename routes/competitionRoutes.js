import express from 'express';
import { getCategories, getCompetitionDetail,  getCompetition} from '../controllers/competitionController.js';

const router = express.Router();

router.get('/getCategories', getCategories);
router.get('/:id', getCompetitionDetail);
router.get('/getCompetitionDetails/:id', getCompetition);

export default router;