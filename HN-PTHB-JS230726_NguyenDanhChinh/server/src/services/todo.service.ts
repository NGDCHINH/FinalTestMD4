import { error } from "console";
import { createConnection } from "../configs/mysql.config";

class TodoService {
  private connection: any;
  constructor() {
    this.connection = createConnection();
  }
  // api get all
  getAll() {
    return new Promise((resolve, reject) => {
      this.connection.query("SELECT * FROM task", (error: Error, data: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  // api get one
  getOne(id: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM task WHERE id = ?",
        id,
        (error: Error, data: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
  // api create
  create(_name: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "INSERT INTO task SET ?",
        { _name },
        (error: Error, data: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
  // api update
  update(data: any, id: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "UPDATE task SET ? WHERE id = ? ",
        [{ ...data }, id],
        (error: Error, data: any) => {
          if (error) {
            reject(error);
          }
          resolve(data);
        }
      );
    });
  }
  // api delete
  delete(id: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "DELETE FROM task WHERE id = ?",
        id,
        (error: Error, data: any) => {
          if (error) {
            reject(error);
          }
          resolve(data);
        }
      );
    });
  }
}

export const todoService = new TodoService();
