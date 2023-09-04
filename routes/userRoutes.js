const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

router.route("/register").post(userController.registerUser);
router.route("/getalluser").get(userController.getAllUsers);
router.route("/:id").get(userController.getUser)

module.exports = router;
