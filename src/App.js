import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages";
import About from "./pages/about";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Recovery from "./pages/recovery";
import Admin from "./pages/admin";
import Account from "./pages/account";
import NotFound from "./components/NotFound";

// Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer, { getCartTotal } from "./redux/cartSlice";

// Global Context
export const AuthContext = React.createContext();
export const ThemeContext = React.createContext();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(getCartTotal());

const App = () => {
  return (
    <>
      {/* Redux Provider */}
      <Provider store={store}>
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
              path="/cart"
              element={
                <MainLayout>
                  <Cart />
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
              path="/account"
              element={
                <MainLayout>
                  <Account />
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
            <Route
              path="*"
              element={
                <MainLayout>
                  <NotFound />
                </MainLayout>
              }
            />
          </Routes>
        </ScrollToTop>
      </Provider>
    </>
  );
};

export default App;
