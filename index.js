const path = require("path");
const express = require("express");
const ejs = require("ejs");
const errorHandlers = require("./middlewares/errorHandlers");
const routes = require("./routes");
const app = express();
const port = 3000;


app.use("/", express.static(path.join(__dirname, "public/")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());
app.use(routes);

app.use(errorHandlers.error500);
app.use(errorHandlers.error404);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}` );
});