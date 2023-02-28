import React from 'react';
import Barra from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";


import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div className="main">
<BrowserRouter>
<Barra />
<Routes>
<Route path="/" element={<Home />} />
<Route index element={<Home />} />
</Routes>
<Footer />

</BrowserRouter>
    </div>
    )
}
export default App;
