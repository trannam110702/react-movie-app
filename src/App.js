import "./App.scss";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail/Detail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="*" element={<div>There is not thing here</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
