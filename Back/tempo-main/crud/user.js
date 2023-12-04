import { Sequelize } from "sequelize";
import db from "./db.js";

const Person = sequelize.define('Usuario', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    city1: {
      type: Sequelize.STRING,
    },
    city2: {
      type: Sequelize.STRING,
    },
    city3: {
      type: Sequelize.STRING,
    },
  });
  
  // Salvar o modelo no banco de dados
  Person.sync();