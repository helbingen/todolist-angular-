import express from 'express';
import UserController from '../../application/controllers/UserController';

const userRoutes = express.Router();

userRoutes.post('/login/create-user', UserController.criarUsuario);
userRoutes.get('/login', UserController.selecionarUsuario);
userRoutes.put('/login', UserController.login);
userRoutes.put('/logout', UserController.atualizarUsuarioLogado);
userRoutes.put('/login-validate', UserController.validarSenhaFrontend);
userRoutes.get('/logged-in', UserController.selecionarUsuarioLogado);

export { userRoutes };
