import { DataTypes } from "sequelize";
import { db } from "../db";

export const ListModel = db.define("ToDoList", {
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
  },
  dataConclusao: {
    type: DataTypes.DATE,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
