import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Recovery from "./pages/recovery";
import Admin from "./pages/admin";

// Global Context
export const AuthContext = React.createContext();
export const ThemeContext = React.createContext();

const App = () => {
  return (
    <>
      {/* Routes that will redirect to the page that matches the forward slash "/" below. */}
      <ScrollToTop>
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
            path="/signup"
            element={
              <MainLayout>
                <SignUp />
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
          <Route
            path="/recovery"
            element={
              <MainLayout>
                <Recovery />
              </MainLayout>
            }
          />
          <Route
            path="/admin"
            element={
              <MainLayout>
                <Admin />
              </MainLayout>
            }
          />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default App;
