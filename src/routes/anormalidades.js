const express = require("express");
const AnormalidadesSchema = require("../models/anormalidades");

const router = express.Router();
// create locatins
router.post("/anormalidades", (req, res) => {
    const user = AnormalidadesSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  router.get("/anormalidades", (req, res) => {
    AnormalidadesSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  ///////////////
router.get("/anormalidades/:userId", (req, res) => {
  const userId = req.params.userId; // obtener el nombre del usuario desde la URL de la solicitud
  AnormalidadesSchema
  .find({ userId:userId  }) // buscar usuarios por nombre
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
  module.exports = router;
