import express from 'express';
import { getAllUsers, getUserById, createUser } from '../controllers/userController.js';

export const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);