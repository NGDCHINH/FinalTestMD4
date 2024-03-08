import React, { useEffect, useState } from "react";
import { TodoItem } from "../../components/lists-data/TodoItem";
import axios from "axios";

export const TodoForm = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [reload, setReload] = useState<boolean>(false);

  const handleCallAPI = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/v1/tasks");
      const data = res.data;
      setTodos(data.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/v1/task", {
        _name: inputValue,
      });
      setInputValue("");
      handleCallAPI();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  useEffect(() => {
    handleCallAPI();
    () => {
      setReload(false);
    };
  }, [reload]);

  return (
    <div className="flex flex-col justify-between mt-10 m-auto p-10 bg-[#ef5366]  w-[500px] h-[700px] text-white shadow-[-15px_-15px_#D3D3D3]">
      <div>
        <h1 className="text-3xl">Todo List</h1>
        <p>Get things done, one item at a time</p>
        <p className="border border-white"></p>
      </div>
      <div className="m-[-40px]">
        {todos?.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            setReload={setReload}
            handleCallAPI={handleCallAPI}
          />
        ))}
      </div>
      <div>
        <p className="mb-2">Add to the todo list</p>
        <form onSubmit={handleAddItem}>
          <input
            className="p-3 text-black  w-[320px]"
            type="text"
            value={inputValue}
            onChange={handleValueChange}
          />
          <button type="submit" className="border border-white p-[11px]">
            ADD ITEM
          </button>
        </form>
      </div>
    </div>
  );
};
