import { FC, useState, useEffect } from "react";
import { TypeTask } from "../interface/task";
import { LTContext } from "./LTContext";
interface Props {
  children: JSX.Element;
}

export const LTProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<TypeTask[]>([]);
  const [counterTask, setCounterTask] = useState(0);
  const [counterSuccess, setCounterSuccess] = useState(0);
  const [inputValue, setInputValue] = useState(" ");
  const [errorCreateTask, setErrorCreateTask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [stateTaks, setStateTask] = useState({ id: "", description: "" });

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === " ") return setErrorCreateTask(true);
    const id = Math.random().toString(30).substring(2);
    const taskCurrent: TypeTask = { id, description: inputValue };
    setTasks([...tasks, taskCurrent]);
    if (errorCreateTask) setErrorCreateTask(false);
    setInputValue(" ");
    localStorage.setItem("tasks", JSON.stringify([...tasks, taskCurrent]));
  };
  const handleDeleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setCounterTask(newTasks.length);
    if (counterSuccess > 0) setCounterSuccess(counterSuccess - 1);
  };
  const handleEditTask = (id: string, description: string) => {
    setStateTask({
      id,
      description
    });
    console.log({ id, description });
    setShowModal(true);
  };
  const handleSaveEdit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const newDescription = stateTaks.description;
    const newTasks = tasks.filter(task => {
      if (task.id === id) {
        task.description = newDescription;
        return task;
      }
      return task;
    });

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setShowModal(false);
  };
  const handleClose = () => setShowModal(false);
  useEffect(() => {
    if (localStorage.getItem("tasks") !== null) {
      const taskLocalStorage = JSON.parse(
        localStorage.getItem("tasks") as string
      );
      setTasks(taskLocalStorage);
    }
  }, []);

  useEffect(() => {
    setCounterTask(tasks.length);
  }, [tasks]);
  return (
    <LTContext.Provider
      value={{
        counterTask,
        counterSuccess,
        setCounterSuccess,
        setCounterTask,
        tasks,
        setTasks,
        handleCreateTask,
        inputValue,
        setInputValue,
        errorCreateTask,
        handleDeleteTask,
        showModal,
        setShowModal,
        handleEditTask,
        handleClose,
        stateTaks,
        setStateTask,
        handleSaveEdit

      }}
    >
      {children}
    </LTContext.Provider>
  );
};
