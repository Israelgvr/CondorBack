const express = require("express");
const imagenSchema = require("../models/imagen");

const router = express.Router();
// create user
router.post("/imagen", (req, res) => {
    const user = imagenSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  router.get("/imagen", (req, res) => {
    imagenSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  ///////////////
router.get("/imagen/:userId", (req, res) => {
  const userId = req.params.userId; // obtener el nombre del usuario desde la URL de la solicitud
  imagenSchema
  .find({ userId:userId  }) // buscar usuarios por nombre
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

  module.exports = router;