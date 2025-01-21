const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
router.get("/", userController.renderUsers); 
router.get("/api/users", userController.getAllUsers); 
router.post("/api/users", userController.createUser);
router.put("/api/users/:id", userController.updateUser);
router.delete("/api/users/:id", userController.deleteUser);

module.exports = router;
