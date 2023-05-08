import { FC, useContext, useState } from "react";
import { LTContext } from "../../context/LTContext";
import { TypeTask } from "../../interface/task";
import { CheackSucces } from "./CheackSucces";
import { CheckVoid } from "./CheckVoid";
import { Delete } from "./Delete";
import { Edit } from "./Edit";
import { ModalTask } from "../Modal/ModalTask";

interface Props { task: TypeTask; }
export const Task: FC<Props> = ({ task }) => {
  const { id, description } = task;
  const { setCounterSuccess, counterSuccess, handleDeleteTask, handleEditTask, showModal } = useContext(LTContext);
  const [successTask, setSuccessTask] = useState(false);

  const handleSucesTask = () => {
    if (!successTask) setCounterSuccess(counterSuccess + 1);
    if (successTask) setCounterSuccess(counterSuccess - 1);
    setSuccessTask(!successTask);
  };

  return (
    <>

      <div className="task">
        <div className="task-sucess-description">
          <div onClick={handleSucesTask} style={{ cursor: "pointer" }}>
            {successTask ? <CheackSucces /> : <CheckVoid />}
          </div>
          <p className="text-description">{description}</p>
        </div>
        <div className="task-sucess-description">
          <div onClick={() => handleDeleteTask(id)} style={{ cursor: "pointer" }}>
            <Delete />
          </div>
          <div onClick={() => handleEditTask(id, description)} style={{ cursor: "pointer" }}>
            <Edit />
          </div>

        </div>
      </div>
      {showModal && <ModalTask />}

    </>

  );
};
