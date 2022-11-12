import Sequelize from 'sequelize'
import pgDatabase from '../database/pg.js'

export const Point = pgDatabase.define('point', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  geometry: {
    type: Sequelize.GEOMETRY,
    allowNull: false,
  },
})
