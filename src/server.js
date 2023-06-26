import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();

let app = express();

//config view engine
viewEngine(app);

//parse request to json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

initWebRoute(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("chat bot is running at port: " + port);
});
