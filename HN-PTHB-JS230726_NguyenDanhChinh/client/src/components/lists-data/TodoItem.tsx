import axios from "axios";
import { BsTrash } from "react-icons/bs";

interface Itodo {
  item: any;
  setReload: (item: boolean) => void;
  handleCallAPI: () => void;
}
export const TodoItem = (prop: Itodo) => {
  const { item, setReload, handleCallAPI } = prop;
  const handleOnChecked = async (e: any, item: any) => {
    try {
      await axios.put(`http://localhost:8800/api/v1/task/${item.id}`, {
        ...item,
        _status: e.target.checked,
      });
      handleCallAPI();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = async (id: number) => {
    try {
      const confirm = window.confirm("Are you sure?");
      if (!confirm) return;
      await axios.delete(`http://localhost:8800/api/v1/task/${id}`);
      setReload(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex p-5 h-[70px] justify-between bg-[#eb7482] items-center mb-2">
      <p className={`text-lg pl-5 ${item._status === 1 ? "line-through" : ""}`}>
        {item._name}
      </p>
      <div className="flex gap-2 justify-between items-center pr-5 ">
        <input
          className="cursor-pointer"
          type="checkbox"
          onChange={(e) => handleOnChecked(e, item)}
          value={item._status}
          checked={item._status}
        />
        <BsTrash
          className="cursor-pointer"
          onClick={() => HandleDelete(item.id)}
        />
      </div>
    </div>
  );
};
