import { Footer, Navbar } from "components";
import { NotFoundError, SignIn, SignUp } from "./pages";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "components/PrivateRoute";
import { Home } from "pages";
function App() {
  const route = [
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <NotFoundError />,
    },
    {
      element: <PrivateRoute />,
      routes: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Routes>
        {route.map((route, index) => {
          if (route.routes) {
            return (
              <Route element={route.element} key={index}>
                {route.routes.map((subRoute, subIndex) => (
                  <Route
                    element={subRoute.element}
                    path={subRoute.path}
                    key={subIndex}
                  />
                ))}
              </Route>
            );
          }
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
