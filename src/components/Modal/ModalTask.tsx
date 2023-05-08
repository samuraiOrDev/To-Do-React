import { useContext } from "react";
import { LTContext } from "../../context/LTContext";

const ModalTask = () => {
  const { stateTaks, setStateTask, handleClose, handleSaveEdit } = useContext(LTContext);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content-header">
          <h3>Editar tarea: {stateTaks.id}</h3>
        </div>
        <div className="modal-content-body">
          <form onSubmit={(e) => handleSaveEdit(e, stateTaks.id)}>
            <textarea value={stateTaks.description} onChange={e => setStateTask({
              ...stateTaks,
              description: e.target.value
            })} cols={50} rows={10} />
            <button type="submit" className="button-edit-task">Editar</button>
          </form>
        </div>
      </div>
      <div className="modal-close" onClick={handleClose}>
        <span>X</span>
      </div>
    </div>
  );
};

export {
  ModalTask
};
