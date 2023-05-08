import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LTProvider } from "./context/LTProvider";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LTProvider>
    <App />
  </LTProvider>
);
