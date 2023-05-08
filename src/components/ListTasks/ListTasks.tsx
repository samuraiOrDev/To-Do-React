import { useContext } from "react";
import { LTContext } from "../../context/LTContext";

import { Task } from "../Task";
export const ListTasks = () => {
  const { tasks, counterSuccess, counterTask, showModal } = useContext(LTContext);
  const bgTasks = showModal ? "bg-modal" : "";
  return (
    <div className="container-lists-tasks">
      {tasks.length < 1
        ? (
          <h1 style={{ textAlign: "center", margin: "0 auto" }}>No hay tareas guardadas</h1>
          )
        : (
          <>
            <div className="container-status-tasks">
              <p>
                Tareas Creadas <span>{counterTask}</span>{" "}
              </p>
              <p>
                Completedas
                <span>
                  {counterSuccess} de {counterTask}{" "}
                </span>
              </p>{" "}
            </div>
            <div className={`container-tasks ${bgTasks}`}>
              {tasks.map((task, index) => (
                <Task key={index} task={task} />
              ))}
            </div>
          </>
          )}
    </div>
  );
};
