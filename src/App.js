import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";
import { ToastContainer } from "react-toastify";

// Use Context
import { useThemeContext } from "./context/ThemeContext";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages";
import About from "./pages/about";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import CheckoutSuccess from "./components/CheckoutSuccess";
import CheckoutFailed from "./components/CheckoutFailed";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Recovery from "./pages/recovery";
import Admin from "./pages/admin";
import Account from "./pages/account";
import NotFound from "./components/NotFound";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import RemoveProduct from "./components/DeleteProduct";
import ArchiveProduct from "./components/ArchiveProduct";
import ActivateProduct from "./components/ActivateProduct";
import Sandbox from "./components/Sandbox";
import Orders from "./pages/orders";
import Order from "./components/Order";

// Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer, { getCartTotal } from "./redux/cartSlice";
import tempReducer from "./redux/tempSlice";
import RemoveOrder from "./components/RemoveOrder";

// Global Context
export const AuthContext = React.createContext();
export const ThemeContext = React.createContext();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    temp: tempReducer,
  },
});

store.dispatch(getCartTotal());

const App = () => {
  const { theme } = useThemeContext();
  return (
    <>
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
              path="/checkout"
              element={
                <MainLayout>
                  <Checkout />
                </MainLayout>
              }
            />
            <Route
              path="/checkout/success"
              element={
                <MainLayout>
                  <CheckoutSuccess />
                </MainLayout>
              }
            />
            <Route
              path="/checkout/failed"
              element={
                <MainLayout>
                  <CheckoutFailed />
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
              path="/admin/add"
              element={
                <MainLayout>
                  <AddProduct />
                </MainLayout>
              }
            />
            <Route
              path="/admin/edit"
              element={
                <MainLayout>
                  <EditProduct />
                </MainLayout>
              }
            />
            <Route
              path="/admin/remove"
              element={
                <MainLayout>
                  <RemoveProduct />
                </MainLayout>
              }
            />
            <Route
              path="/admin/archive"
              element={
                <MainLayout>
                  <ArchiveProduct />
                </MainLayout>
              }
            />
            <Route
              path="/admin/activate"
              element={
                <MainLayout>
                  <ActivateProduct />
                </MainLayout>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <MainLayout>
                  <Orders />
                </MainLayout>
              }
            />
            <Route
              path="/admin/orders/view"
              element={
                <MainLayout>
                  <Order />
                </MainLayout>
              }
            />
            <Route
              path="/admin/orders/remove"
              element={
                <MainLayout>
                  <RemoveOrder />
                </MainLayout>
              }
            />
            <Route
              path="/sandbox"
              element={
                <MainLayout>
                  <Sandbox />
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
          <ToastContainer position="bottom-center" theme={theme} />
        </ScrollToTop>
      </Provider>
    </>
  );
};

export default App;
