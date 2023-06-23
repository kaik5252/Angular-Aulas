require('dotenv').config({ path:'.env' });
const express = require('express');
const cors = require('cors');

const app = express();
const routers = require('./routers')

app.use(express.json());
app.use(cors());
app.use('/api', routers);

app.listen(process.env.PORT, () => {
  console.log("> Server Iniciado na porta: " + process.env.PORT);
  console.log("> http://localhost:" + process.env.PORT + "/api/")
});