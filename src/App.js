import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CollectionPage from "./pages/CollectionPage";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
return (
<CartProvider>
<BrowserRouter>
<div className="App min-h-screen flex flex-col">
<Header />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/feminine" element={<CollectionPage />} />
<Route path="/masculine" element={<CollectionPage />} />
<Route path="/perfume" element={<CollectionPage />} />
<Route path="/product/:id" element={<ProductDetail />} />
<Route path="/cart" element={<Cart />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
<Toaster />
</div>
</BrowserRouter>
</CartProvider>
);
}

export default App;