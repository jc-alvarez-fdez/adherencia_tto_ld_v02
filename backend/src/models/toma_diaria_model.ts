import db from '../db/connection';
import { DataTypes } from 'sequelize';
import Administracion from './administracion_model';

const TomaDiaria = db.define('03_administraciones', {

  id_toma_diaria: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  administracion_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  toma_realizada: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  toma_retrasada: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  toma_perdida: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
},{
  //indexes: [{ unique: true, fields: ['email', 'dni'] }],
  timestamps: false, // Activa la creación automática de createdAt y updatedAt
  //updatedAt: 'updated_at',
  //createdAt: 'created_at'
});

TomaDiaria.hasMany(Administracion, { foreignKey: 'administracion_id' });
Administracion.belongsTo(TomaDiaria, { foreignKey: 'administracion_id' });


//Ten en cuenta que hasMany solo establece la relación desde el modelo principal hacia el secundario.
//En algunos casos, eso puede ser suficiente si no necesitas navegar desde el secundario hacia el principal.
//Sin embargo, si necesitas la relación inversa(por ejemplo, obtener el usuario al que pertenece un libro), entonces necesitarás belongsTo.

export default TomaDiaria;