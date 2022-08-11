import express from "express";
import ListController from "./controllers/ListController";
import UserController from "./controllers/UserController";

const router = express.Router();

// Lista
router.post("/atividades/criar", ListController.create);
router.get("/atividades/abertas", ListController.select);
router.get("/atividades/concluidas", ListController.selectConclusao);
router.get("/atividades/:id", ListController.selectOne);
router.put("/atividades/:id", ListController.update);
router.delete("/atividades/:id", ListController.delete);

// Login
router.post("/login/create-user", UserController.create);
router.get("/login", UserController.select);
router.put("/login", UserController.login);
router.put("/logout", UserController.updateUserLogado);
router.put("/login-validate", UserController.validarSenhaFrontend);
router.get("/logged-in", UserController.selectUsuarioLogado);

export { router };
