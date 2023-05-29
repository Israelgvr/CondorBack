const express = require("express");
const llamadasHistSchema = require("../models/llamadaHistorial");

const router = express.Router();
// create user
router.post("/HistoryCall", (req, res) => {
    const user = llamadasHistSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  router.get("/HistoryCall", (req, res) => {
    llamadasHistSchema 
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  ///////////////
router.get("/HistoryCall/:userId", (req, res) => {
  const userId = req.params.userId; 
  llamadasHistSchema 
  .find({ userId:userId  }) 
  .sort({ date: -1 }) 
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

  module.exports = router;