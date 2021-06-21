const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin:"*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.json({
        msg: "O backend está funcionando!!!!"
    })
});

const db = require("./app/model");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao banco de dados");
}).catch(err => {
    console.log ("houve um erro: " + err);
    process.exit();
});

require("./app/routes/car.routes")(app);

app.listen(8080, () => {
    console.log("O servidor está funcionando");
});