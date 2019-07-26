const express = require("express");

const app = express();

app.get("/", (reg, res, next) => {
    res.send("it's working");
})

app.listen(5000,()=>{
    console.log("Сервер запустился", new Date());
})
