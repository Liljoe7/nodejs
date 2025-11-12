
import express from "express";
const app = express();
app.use(express.json());

// Route principale pour Alexa ou ton app
app.post("/alexa", (req, res) => {
  const intent = req.body?.request?.intent?.name || "Unknown";
  console.log("Requête reçue :", intent);

  res.json({
    version: "1.0",
    response: {
      outputSpeech: {
        type: "PlainText",
        text: `Bonjour, tu as activé Coinsino. Ton intention est ${intent}.`
      },
      shouldEndSession: false
    }
  });
});

// Route test (ouvrir dans navigateur)
app.get("/", (req, res) => {
  res.send("✅ Serveur Coinsino actif !");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Coinsino en ligne sur le port ${PORT}`));
