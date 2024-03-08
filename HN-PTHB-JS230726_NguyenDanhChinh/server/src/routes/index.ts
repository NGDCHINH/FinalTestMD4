import express, { Express } from "express";
import { todoRoute } from "./todo.route";

export const rootRoute = (app: Express) => {
  todoRoute(app);
};
