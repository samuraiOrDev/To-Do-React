import { useContext } from "react";
import { LTContext } from "../../context/LTContext";
import { Plus } from "./Plus";
export const InputTask = () => {
  const { handleCreateTask, inputValue, setInputValue, errorCreateTask, showModal } = useContext(LTContext);
  return (
    <form className="container-input-task-error" onSubmit={handleCreateTask}>
      <div className="container-input-task" >
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!!showModal}
        />
        <button type="submit" className="" disabled={!!showModal}>
          <span>Crear</span> <Plus />
        </button>
      </div>
      {errorCreateTask && <p className="error">No puedes introducir una tarea vacía</p>}
    </form >
  );
};
