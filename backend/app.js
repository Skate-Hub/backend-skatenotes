// app.js
const express = require('express');
const app = express();
const obstaculoRoutes = require('./src/routes/obstaculosRoute');
const manobrasRoutes = require('./src/routes/manobrasRoutes');
const anexosRoutes = require('./src/routes/anexosRoutes');
const treinosRoutes = require('./src/routes/treinoRoutes')
const DBconnect = require("./src/database/database");

DBconnect();
app.use(express.json());
app.use('/obstaculos', obstaculoRoutes);
app.use('/manobras', manobrasRoutes);
app.use('/anexos', anexosRoutes);
app.use("/treinos", treinosRoutes);


module.exports = app;
