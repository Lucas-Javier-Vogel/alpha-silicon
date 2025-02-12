require("rootpath")();
const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require("./src/config/config.json");
const personaCont = require("./src/controller/personaController.js");
app.use("/api/persona",personaCont);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
morgan(':method :url :status :res[content-length] - :response-time ms');
  


/* app.get("/", function (req, res) {
    res.send("ALPHA-SILICON");
}); */



/*
const userCont = require("userController.js");
app.use("/api/usuario",userCont);
*/
app.use(require('./src/controller/personaController.js'))

app.listen(config.server.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server iniciado en puerto:${config.server.port}`);
    }
});
