import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VshowcaseLayout from "../../shared/layout/VshowcaseLayout";
import RegisterUser from "../auth/Register";
import RegisterLanding from "./pages/RegisterPage";
import AppEmptyLayout from "../../shared/layout/AppEmptyLayout";
import Login from "../auth/Login";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import BuyProductPage from "./pages/BuyProductPage"
import InvoicePage from "./pages/InvoicePage";

const VshowcaseRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <VshowcaseLayout>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/:product/:id" element={<ProductDetails />}></Route>
              <Route
                path="/list/:searchTerm/"
                element={<ProductList />}
              ></Route>
            </Routes>
          </VshowcaseLayout>
        }
      />
      <Route
        path="/register/*"
        element={
          <AppEmptyLayout>
            <Routes>
              <Route path="landing/" element={<RegisterLanding />} />
              <Route path="count/personal" element={<RegisterUser />} />
              <Route path="count/business" element={<RegisterUser />} />
            </Routes>
          </AppEmptyLayout>
        }
      />
      <Route
        path="/auth/*"
        element={
          <AppEmptyLayout>
            <Routes>
              <Route path="login" element={<Login />} />
            </Routes>
          </AppEmptyLayout>
        }
      />
      <Route path="/buy/*" 
        element={
          <AppEmptyLayout>
            <Routes>
              <Route path="payselect" element={ <BuyProductPage /> }></Route>
            </Routes>
            <Routes>
              <Route path="invoice" element={ <InvoicePage /> }></Route>
            </Routes>
          </AppEmptyLayout>
        }
      />
    </Routes>
  );
};

export default VshowcaseRoutes;
