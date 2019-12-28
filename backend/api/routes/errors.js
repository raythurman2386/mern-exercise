const errorRoutes = require("express").Router();

errorRoutes.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

errorRoutes.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "An internal error occurred"
  });
});

module.exports = errorRoutes;