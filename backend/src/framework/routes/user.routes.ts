import express from 'express';
import userController from '../../application/controllers/userController';

const userRoutes = express.Router();

userRoutes.post('/login/create-user', userController.criarUsuario);
userRoutes.get('/login', userController.selecionarUsuario);
userRoutes.put('/login', userController.login);
userRoutes.put('/logout', userController.atualizarUsuarioLogado);
userRoutes.put('/login-validate', userController.validarSenhaFrontend);
userRoutes.get('/logged-in', userController.selecionarUsuarioLogado);

export { userRoutes };
