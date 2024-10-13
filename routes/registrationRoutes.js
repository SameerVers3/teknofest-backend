import express from 'express';
import { register } from '../controllers/registrationController.js';

const router = express.Router();

router.post('/participant', register);

export default router;
