import "./CategorySection.css";
import { Link } from "react-router-dom";

export default function CategorySection() {
  return (
    <section className="category-section">
      <h2>
        <i className="fas fa-th-large"></i>Product Spotlight
      </h2>
      <div className="category-grid">
        <div className="category-item">
          <i className="fas fa-microchip"></i>
          <img src="/static/ddddd.jpg" alt="Network Product" />
          <span>CCTV</span>
        </div>
        <div className="category-item">
          <span><img src="https://insidersystem.co.th/wp-content/uploads/2021/12/DS-K1T343MWX.jpg" alt="Network Product" /><br />Access Control</span>
        </div>
        <div className="category-item">
          <span><img src="https://i0.wp.com/rxtx.com.au/wp-content/uploads/2023/07/Dahua-DH-PFC200D-6U4D-Front-View.png?fit=1000%2C1000&ssl=1" alt="Network Product" /><br />Rack</span>
        </div>
        <div className="category-item">
          <span><img src="https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products67516_800.jpg" alt="Network Product" /><br />UPS</span>
        </div>
        <div className="category-item">
          <span>Other</span>
        </div>
      </div>
    </section>
  );
}
