import express from 'express';
import AtividadesController from '../../application/controllers/AtividadesController';

const atividadesRoutes = express.Router();
atividadesRoutes.post('/atividades/criar', AtividadesController.criarAtividade);
atividadesRoutes.get(
  '/atividades/abertas',
  AtividadesController.buscaAtividadePorOrdemDeCriacao,
);
atividadesRoutes.get(
  '/atividades/concluidas',
  AtividadesController.buscaAtividadePorOrdemDeConclusao,
);
atividadesRoutes.get(
  '/atividades/:id',
  AtividadesController.buscaAtividadePorId,
);
atividadesRoutes.put('/atividades/:id', AtividadesController.editarAtividade);
atividadesRoutes.delete(
  '/atividades/:id',
  AtividadesController.removerAtividade,
);

export { atividadesRoutes };
