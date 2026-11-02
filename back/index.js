require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mon premier serveur MERN !");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "L'API fonctionne correctement" });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});