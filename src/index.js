const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const userDiviceRoute = require("./routes/UserDivice");
const imagenRoute = require("./routes/imagen");
const locationRoute= require("./routes/location");
const videoRoute= require("./routes/video");
const anormalRoute= require("./routes/anormalidades");
const botAnormalidades = require("./routes/bot");
const contact = require("./routes/ContactosR");
const HistLlamdas = require("./routes/llamadasHistorialR");
const Documentos = require("./routes/documentosAndroid");


// settings
const app = express();
const port = process.env.PORT || 3200;
app.use(cors())

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", userDiviceRoute);
app.use("/api", imagenRoute);
app.use("/api", locationRoute);
app.use("/api", videoRoute);
app.use("/api", anormalRoute);
app.use("/api",botAnormalidades);
app.use("/api",contact );
app.use("/api",HistLlamdas);
app.use("/api",Documentos);

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });
  
  // mongodb connection
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));
  
  // server listening
  app.listen(port, () => console.log("Server listening to", port));