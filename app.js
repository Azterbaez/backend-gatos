import express from "express";


import climaRoutes from "./routes/clima.routes.js";

import estadisticasRoutes from "./routes/estadisticas.routes.js";



import cors from "cors";  //Para que el frontend pueda llamar
import gatoRoutes from "./routes/gato.routes.js";
const app = express();


// Middlewares
app.use(cors());  //Permite peticiones desde cualquier origen
app.use(express.json());

// Rutas
app.use(gatoRoutes);
app.use(climaRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no registrada." });
});

app.use(estadisticasRoutes);   // agrega esta línea junto a las otras rutas


export default app;
