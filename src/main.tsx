import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import "./main.css";
import "./index.scss";

import { Provider } from "react-redux";
import { store } from "@store/index";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
