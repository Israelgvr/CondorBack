const express = require("express");
const userSchema = require("../models/UserDivice");

const router = express.Router();
// create user
router.post("/userDivice", (req, res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.get("/userDivice", (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  router.get("/userDivice/:userId", (req, res) => {
    const userId = req.params.userId; // obtener el nombre del usuario desde la URL de la solicitud
    userSchema
    .find({ userId:userId  }) // buscar usuarios por nombre
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  

  module.exports = router;