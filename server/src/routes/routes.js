const express = require("express")
const routes = express.Router();
const UserController = require("../controller/UserController")

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});
routes.post('/user', UserController.create);
routes.delete("/user/:id", UserController.delete)
routes.put("/user/:id", UserController.update)

module.exports = routes;