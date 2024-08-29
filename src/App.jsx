import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import PageNotfound from "./pages/PageNotfound";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import React from "react";

const URL = "http://localhost:8000";
const App = () => {
  const [cities, setCities] = useState({});
  const [isloading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setisLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Some error while loading data...");
      } finally {
        setisLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<PageNotfound />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isloading={isloading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isloading={isloading} />}
            />
            <Route path="countries" element={<p>Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
