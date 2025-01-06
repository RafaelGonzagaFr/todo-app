import { Router } from "express";
import { createUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import { createTask, getTaskById, getTasks, getTasksByUserId, updateTask } from "../controllers/taskController";
import User from "../models/User";

const router = Router();

//Rotas de usuário
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

//Rotas de Tasks
router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.get("/tasks/user/:id", getTasksByUserId);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);

export default router;