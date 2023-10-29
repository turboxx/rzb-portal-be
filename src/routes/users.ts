import express from 'express';

import UsersController from '../controllers/users';
import { isAuthenticated } from '../middlewares/auth';

const router = express.Router();

// noinspection TypeScriptValidateTypes
router.route('/').post(UsersController.create);
router.route('/').get(isAuthenticated, UsersController.list);
router.route('/count').get(isAuthenticated, UsersController.count);

export default router;