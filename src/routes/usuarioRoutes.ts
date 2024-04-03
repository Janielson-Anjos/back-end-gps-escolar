import express from "express";
// import { createUser, getUserById } from "../controllers/UsuarioController";
import { allUser, createUser,  } from "../controllers/UsuarioController";

const router = express.Router();

router.post('/usuario', createUser);
// router.get('/:id', getUserById);
router.get('/', allUser);


export default router;