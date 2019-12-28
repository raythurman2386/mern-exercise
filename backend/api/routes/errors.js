const router = require("express").Router();

router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "An internal error occurred"
  });
});

module.exports = router;