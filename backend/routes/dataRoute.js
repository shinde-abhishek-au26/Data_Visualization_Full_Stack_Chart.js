import Router from 'express';
import getAllData from '../controllers/dataController.js';
const router = Router();

router.get('/', getAllData);

export default router;
