import { Aside } from "./components";
import { Posts, PostsEdit, Users } from "./pages";
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
          <Route path="/post/post-edit/:id" element={<PostsEdit />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
