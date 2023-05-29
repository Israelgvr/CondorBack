const express = require("express");
const locationSchema = require("../models/location");

const router = express.Router();
// create locatins
router.post("/locations", (req, res) => {
    const user = locationSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  // get all location
router.get("/locations", (req, res) => {
  locationSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
/*router.get("/locations/:id", (req, res) => {
  const { id } = req.params;
  locationSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
*/
// get a userId
///////////////
router.get("/locations/:userId", (req, res) => {
  const userId = req.params.userId; // obtener el nombre del usuario desde la URL de la solicitud
  locationSchema
  .find({ userId:userId  }) // buscar usuarios por nombre
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//////////////

  module.exports = router;