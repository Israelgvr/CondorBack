const express = require("express");
const DocumSchema = require("../models/DocumentosAndroid");

const router = express.Router();
// create user
router.post("/Document", (req, res) => {
    const user = DocumSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  router.get("/Document", (req, res) => {
    DocumSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  ///////////////
router.get("/Document/:userId", (req, res) => {
  const userId = req.params.userId; // obtener el nombre del usuario desde la URL de la solicitud
  DocumSchema
  .find({ userId:userId  }) // buscar usuarios por nombre
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

  module.exports = router;