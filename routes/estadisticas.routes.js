import express from "express";
import { obtenerEstadisticas } from "../controllers/estadisticas.controller.js";
import {
  exportarEstadisticasExcel,
  exportarEstadisticasPDF,
  exportarGatosCSV,
} from "../controllers/exportacion.controller.js";
import { capturarInfoSolicitud } from "../middlewares/auditoria.js";


import { exportarGatosLista, exportarGatosJSON, exportarGatosSQL } from "../controllers/exportacion.controller.js";


const router = express.Router();

router.use(capturarInfoSolicitud);

router.get("/estadisticas", obtenerEstadisticas);
router.get("/estadisticas/excel", exportarEstadisticasExcel);
router.get("/estadisticas/pdf", exportarEstadisticasPDF);
router.get("/estadisticas/csv", exportarGatosCSV);

// Rutas descargas
router.get("/lista", exportarGatosLista);
router.get("/json", exportarGatosJSON);
router.get("/sql", exportarGatosSQL);



export default router;
