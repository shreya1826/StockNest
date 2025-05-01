import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing page/home/HomePage";
import AboutPage from "./landing page/about/AboutPage";
import ProductsPage from "./landing page/products/ProductsPage";
import PricingPage from "./landing page/pricing/PricingPage";
import SupportPage from "./landing page/support/SupportPage";
import Signup from "./landing page/auth/Signup";
import Login from "./landing page/auth/Login";
import Home from "./landing page/auth/Home";
import Navbar from "./landing page/Navbar";
import Footer from "./landing page/Footer";
import NotFound from "./landing page/NotFound";
import { CookiesProvider } from "react-cookie"; // ✅ Import CookiesProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider> {/* ✅ Wrap your app inside CookiesProvider */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);
