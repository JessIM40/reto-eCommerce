import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/category/:category" element={<Category/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
