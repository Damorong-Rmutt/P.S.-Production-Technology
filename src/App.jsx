import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProductLayout from "./layout/ProductLayout";
import PromotionLayout from "./layout/PromotionLayout";
import LoginLayout from "./layout/LoginLayout";
import DashboardLayout from "./layout/DashboardLayout";
import PrivateRoute from "./PriveteRoute";
import ContactLayout from "./layout/ContactLayout";
import CategoryPageLayout from "./layout/CategoryPageLayout";
import PaymetLayout from "./layout/PaymetLayout";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< MainLayout/>} />      
          <Route path="/product" element={<ProductLayout/>} />
          <Route path="/promotion" element={<PromotionLayout/>} />
          <Route path="/login" element={<LoginLayout/>} />
          <Route path="/payment" element={<PaymetLayout />} />
          <Route path="/dashboard" element={
          <PrivateRoute><DashboardLayout /></PrivateRoute>} />
          <Route path="/contacts" element={<ContactLayout />} />
          <Route path="/category/:type_id/:type_name" element={<CategoryPageLayout />} />
        </Routes>
    </Router>
  );
}

export default App;
