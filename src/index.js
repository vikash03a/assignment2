import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Posts from "./components/Posts";
import Comments from "./components/Comments";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>
);
