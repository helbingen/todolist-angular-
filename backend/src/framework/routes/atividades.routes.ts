import express from 'express';
import atividadesController from '../../application/controllers/atividadesController';

const atividadesRoutes = express.Router();
atividadesRoutes.post('/atividades/criar', atividadesController.criarAtividade);
atividadesRoutes.get(
  '/atividades/abertas',
  atividadesController.buscaAtividadePorOrdemDeCriacao,
);
atividadesRoutes.get(
  '/atividades/concluidas',
  atividadesController.buscaAtividadePorOrdemDeConclusao,
);
atividadesRoutes.get(
  '/atividades/:id',
  atividadesController.buscaAtividadePorId,
);
atividadesRoutes.put('/atividades/:id', atividadesController.editarAtividade);
atividadesRoutes.delete(
  '/atividades/:id',
  atividadesController.removerAtividade,
);

export { atividadesRoutes };
