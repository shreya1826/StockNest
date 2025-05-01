// Inside routes/AuthRoute.js
const express = require("express");
const router = express.Router();
const { Login, Signup, VerifyCookie } = require("../controllers/AuthController");

router.post("/login", Login);
router.post("/signup", Signup);
router.post("/verifyCookie", VerifyCookie); // ✅ Move it here

module.exports = router;
