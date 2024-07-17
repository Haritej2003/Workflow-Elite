const express = require("express");
const router = express.Router();
const todo = require("../controllers/todo");

router.get("/", todo.homeController);

router.get("/add", todo.addTodoFormController);

router.get("/update", todo.updateTodoFormController);

router.get("/delete", todo.deleteTodoPageController);

router.post("/add", todo.addTodoController);

router.post("/update/:id", todo.updateTodoController);

router.get("/confirm-delete", todo.deleteTodoController);

module.exports = router;
