const express = require("express");
const entrepriseController = require("./routes/entrepriseController");
exports.router = (function () {
  const apiRouter = express.Router();

  //Client routes
  apiRouter.route("/entreprises").post(entrepriseController.create);
  apiRouter.route("/entreprises").get(entrepriseController.findAll);

  return apiRouter;
})();
