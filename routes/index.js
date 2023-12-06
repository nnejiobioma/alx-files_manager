import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';
import express from 'express';
import UsersController from '../controllers/UsersController';
import AppController from '../controllers/AppController';


const router = express.Router();

// the get Routes
router.get('/files/:id', FilesController.getShow);
router.get('/files', FilesController.getIndex);
router.get('/status', AppController.getStatus);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/users/me', UsersController.getMe);
router.get('/stats', AppController.getStats);
router.get('/connect', AuthController.getConnect);

// the post Routes
router.post('/files', FilesController.postUpload);
router.post('/users', UsersController.postNew);

module.exports = router;
