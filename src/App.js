import { Aside } from "./components";
import { Posts, Users } from "./pages";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Aside />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/post" element={<Posts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
