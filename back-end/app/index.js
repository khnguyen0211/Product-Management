const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
const rootRouter = require("./routers/index.router");

app.use(rootRouter);

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log("app is loading on localhost:" + port);
}) 

const {sequelize} = require("./models/index.js");
sequelize.sync({alter:true}); 