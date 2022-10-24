const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
require('./routes/index.routes')(app)

const port = 8000;

app.listen(port,() => console.log('Listening on port: ${port}'));