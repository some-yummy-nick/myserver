const express = require("express");
const booksRouter= express.Router();
const app = express();
const products = ["Apple", "Pen", "Computer"];

app.get("/", (reg, res, next) => {
    res.send("it's working");
})

app.get("/products", (reg, res, next) => {
    res.json({products});
   console.log("Page ",reg.query.page);
})

app.get("/products/:id", (reg, res, next) => {
    if(products[reg.params.id]){
        res.send(products[reg.params.id]);
    } else{
        res.status(404).send("Product not found");
    }
})

app.get("/blog", (reg, res, next) => {
    res.redirect("/");
})
app.get("/downloadBooks", (reg, res, next) => {
    res.download("./public/books.html", "anotherName", (message)=>{
        console.log("file send");
    });
})

booksRouter.get("/", (reg, res) => {
    res.send("books");
})

booksRouter.get("/about", (reg, res) => {
    res.send("about books");
})

app.use("/books", booksRouter);

app.listen(5000, () => {
    console.log("Сервер запустился", new Date());
})
