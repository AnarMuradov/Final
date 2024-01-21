import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import WishListProvider from "./Context/WishListContext";
import BasketProvider from "./Context/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BasketProvider>
    <WishListProvider>
     <HelmetProvider>
        <App />
      </HelmetProvider>
    </WishListProvider>
     </BasketProvider>
  </React.StrictMode>
);
