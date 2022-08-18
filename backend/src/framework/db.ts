import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  'postgres://postgres@localhost:5432/ToDoList',
  {},
);
