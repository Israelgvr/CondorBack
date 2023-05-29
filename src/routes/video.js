const express = require("express");
const videoSchema = require("../models/video");

const router = express.Router();
// create user
router.post("/videos", (req, res) => {
    const user = videoSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

    ///////////////
router.get("/videos/:userId", (req, res) => {
  const userId = req.params.userId; // obtener el nombre del usuario desde la URL de la solicitud
  videoSchema
  .find({ userId:userId  }) // buscar usuarios por nombre
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

  

  module.exports = router;