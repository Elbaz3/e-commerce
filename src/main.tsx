import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import "./tailwind.css";
import "./index.scss";

createRoot(document.getElementById("root")!).render(<AppRouter />);
