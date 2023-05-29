const express = require("express");
const contactosSchema = require("../models/Contactos");

const router = express.Router();
// create user
router.post("/contact", (req, res) => {
    const user = contactosSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  router.get("/contact", (req, res) => {
    contactosSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  ///////////////
router.get("/contact/:userId", (req, res) => {
  const userId = req.params.userId; // obtener el nombre del usuario desde la URL de la solicitud
  contactosSchema 
  .find({ userId:userId  }) // buscar usuarios por nombre
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

  module.exports = router;