import { DataTypes } from 'sequelize';
import { db } from '../../db';

export const UserModel = db.define('Users', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
