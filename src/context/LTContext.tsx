import { createContext } from "react";
import { TypeTask } from "../interface/task";

interface TypeListTasks {
  counterTask: number;
  setCounterSuccess: React.Dispatch<React.SetStateAction<number>>;
  counterSuccess: number;
  tasks: TypeTask[];
  setTasks: React.Dispatch<React.SetStateAction<TypeTask[]>>;
  setCounterTask: React.Dispatch<React.SetStateAction<number>>;
  handleCreateTask: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  errorCreateTask: boolean;
  handleDeleteTask: (id: string) => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditTask: (id: string, description: string) => void;
  handleClose: () => void;
  stateTaks: TypeTask;
  setStateTask: React.Dispatch<React.SetStateAction<TypeTask>>;
  handleSaveEdit: (e: React.FormEvent<HTMLFormElement>, id: string) => void;
}

export const LTContext = createContext({} as TypeListTasks);
