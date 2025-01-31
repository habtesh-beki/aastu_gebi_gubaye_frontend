import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import routes from "@/routes";
import "./index.css";
import HomePage from "./pages/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {routes.map(({ path, element }) => {
            return <Route path={path} element={element} />;
          })}
        </Route>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
