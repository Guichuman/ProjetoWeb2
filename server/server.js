const express = require("express");
const routes = require("./src/routes/routes")
const database = require("./src/database/database")
const bodyParser = require("body-parser")
const UserModel = require("./src/model/User")/*
const ProdutoModel = require("./src/model/Produto")
const VendaModel = require("./src/model/Venda")*/

const app = express();
//database.sync({force:false})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes);

database.authenticate()
  .then(() => {
      console.log('conectado no banco')
  }).catch((error) => {
      console.log(error)
  })

app.listen(3000, () => console.log("rodando"));

