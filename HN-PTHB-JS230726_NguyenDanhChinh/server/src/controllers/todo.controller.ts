import { error } from "console";
import { Request, Response } from "express";
import { todoService } from "../services/todo.service";

class TodoController {
  // api get all
  async getAll(req: Request, res: Response) {
    try {
      const result = await todoService.getAll();
      res.status(200).json({
        message: "Get all success!",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error!",
      });
    }
  }
  // api get one
  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await todoService.getOne(id);

      res.status(200).json({
        message: "Get one item success!",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error!",
      });
    }
  }
  // api create
  async create(req: Request, res: Response) {
    try {
      const { _name } = req.body;
      const result = await todoService.create(_name);
      if (result) {
        res.status(201).json({
          message: "Create success!",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error!",
      });
    }
  }
  // api update
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await todoService.update(req.body, id);
      if (result) {
        res.status(200).json({
          message: "Update success!",
        });
      }
    } catch {
      res.status(500).json({
        message: "Internal server error!",
      });
    }
  }
  // api delete
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await todoService.delete(id);
      if (result) {
        res.status(200).json({
          message: "Delete success!",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error!",
      });
    }
  }
}

export const todoController = new TodoController();
