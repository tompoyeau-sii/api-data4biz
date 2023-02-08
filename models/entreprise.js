'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entreprise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entreprise.init({
    entreprise_libelle: DataTypes.STRING,
    entreprise_resume: DataTypes.STRING,
    entreprise_video: DataTypes.STRING,
    entreprise_adresse: DataTypes.STRING,
    entreprise_logo: DataTypes.STRING,
    entreprise_site: DataTypes.STRING,
    collab_nom: DataTypes.STRING,
    collab_linkedin: DataTypes.STRING,
    collab_resume: DataTypes.STRING,
    collab_nom: DataTypes.STRING,
    collab_prenom: DataTypes.STRING,
    collab_mail: DataTypes.STRING,
    collab_photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entreprise',
  });
  return Entreprise;
};