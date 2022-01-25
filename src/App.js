import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Registration from "./pages/registration";
import Login from "./pages/login";

// Global Context
export const AuthContext = React.createContext();
export const ThemeContext = React.createContext();

const App = () => {
  return (
    <>
      {/* Routes that will redirect to the page that matches the forward slash "/" below. */}
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/shop"
          element={
            <MainLayout>
              <Shop />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/registration"
          element={
            <MainLayout>
              <Registration />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
