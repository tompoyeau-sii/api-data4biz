const models = require("../models");

module.exports = {
  //Création d'un client
  create: function (req, res) {
    const entreprise_libelle = req.body.entreprise_libelle;
    const entreprise_resume = req.body.entreprise_resume;
    const entreprise_video = req.body.entreprise_video;
    const entreprise_adresse = req.body.entreprise_adresse;
    const entreprise_logo = req.body.entreprise_logo;
    const entreprise_site = req.body.entreprise_site;
    const collab_nom = req.body.collab_nom;
    const collab_prenom = req.body.collab_prenom;
    const collab_mail = req.body.collab_mail;
    const collab_telephone = req.body.collab_telephone;
    const collab_photo = req.body.collab_photo;
    const collab_linkedin = req.body.collab_linkedin;
    const collab_resume = req.body.collab_resume;

    if (entreprise_libelle == null) {
      return res.status(400).json({ error: "Manque un libelle" });
    }

    models.Entreprise.findOne({
      attributes: ["entreprise_libelle"],
      where: { entreprise_libelle: entreprise_libelle },
    }).then(function (entrepriseFound) {
      if (!entrepriseFound) {
        const newEntreprise = models.Entreprise.create({
          entreprise_libelle: entreprise_libelle,
          entreprise_resume: entreprise_resume,
          entreprise_video: entreprise_video,
          entreprise_adresse: entreprise_adresse,
          entreprise_logo: entreprise_logo,
          entreprise_site: entreprise_site,
          collab_nom: collab_nom,
          collab_prenom: collab_prenom,
          collab_mail: collab_mail,
          collab_telephone: collab_telephone,
          collab_photo: collab_photo,
          collab_linkedin: collab_linkedin,
          collab_resume: collab_resume,
        })
          .then(function (newEntreprise) {
            return res.status(201).json({
              entrepriseId: newEntreprise.id,
            });
          })
          .catch(function (err) {
            return res.status(500).json({ error: "cannot add entreprise" });
          });
      } else {
        return res.status(409).json({ error: "entreprise already exist" });
      }
    });
  },
  findAll: function (req, res) {
    models.Entreprise.findAll()
    .then( (entreprises)=> {    
      console.log(entreprises)
      return res.status(201).json({
          entrepriseId:entreprises[0],
        });
      })
      .catch(error => console.error(error));
    },
};
