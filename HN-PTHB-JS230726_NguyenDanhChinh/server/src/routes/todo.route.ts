import { Express } from "express";
import { todoController } from "../controllers/todo.controller";
export const todoRoute = (app: Express) => {
  // api get all
  app.get("/api/v1/tasks", todoController.getAll);
  // api get one
  app.get("/api/v1/task/:id", todoController.getOne);
  // api create
  app.post("/api/v1/task", todoController.create);
  // api update
  app.put("/api/v1/task/:id", todoController.update);
  // api delete
  app.delete("/api/v1/task/:id", todoController.delete);
};
