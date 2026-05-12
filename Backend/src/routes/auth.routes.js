const router = require("express").Router();

const {
  register,
  login
} = require("../controllers/auth.controller");


// TEST
router.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Auth Route Working"
  });

});


// REGISTER
router.post("/register", register);


// LOGIN
router.post("/login", login);


module.exports = router;