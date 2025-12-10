import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import "./main.css";
import "./index.scss";

createRoot(document.getElementById("root")!).render(<AppRouter />);
