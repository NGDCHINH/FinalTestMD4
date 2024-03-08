import React, { useEffect } from "react";
import { TodoForm } from "../../components/form-todo/TodoForm";
import axios from "axios";

function TodoPage() {
  return (
    <div>
      <TodoForm />
    </div>
  );
}

export default TodoPage;
