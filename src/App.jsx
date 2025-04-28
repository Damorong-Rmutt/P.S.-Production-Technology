import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProductLayout from "./layout/ProductLayout";
import PromotionLayout from "./layout/PromotionLayout";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< MainLayout/>} />      
          <Route path="/product" element={<ProductLayout/>} />
          <Route path="/promotion" element={<PromotionLayout/>} />
        </Routes>
    </Router>
  );
}

export default App;
