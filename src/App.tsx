import { InputTask, ListTasks, Logo } from "./components";

function App() {
  return (
    <div className="container">
      <div className="container-cabecera">
        <Logo />
      </div>
      <div className="container-contenido">
        <InputTask />
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
