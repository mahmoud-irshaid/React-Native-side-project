const router = require("express").Router();
const {
  getAllTasks,
  createNewTask,
  deleteTask,
  checkTask,
  editTask,
  newAudio,
} = require("../controller/task");

router.get("/tasks", getAllTasks);
router.post("/newTask", createNewTask);
router.post("/audio", newAudio);
router.put("/deleteTask/:id", deleteTask);
router.put("/checkTask/:id", checkTask);
router.put("/editTask/", editTask);

module.exports = router;
