import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import "./main.css";
import "./index.scss";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "@store/index";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster position="top-right" richColors />
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  </Provider>
);
