import { DataTypes } from 'sequelize';
import { db } from '../../db';

export const atividadesModel = db.define('atividades', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  atividade: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  concluido: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  dataConclusao: {
    type: DataTypes.DATE,
    defaultValue: new Date(0),
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
