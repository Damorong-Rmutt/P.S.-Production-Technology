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
          <img src="../../../static/ddddd.jpg" alt="Network Product" />
          <span>CCTV</span>
        </div>
        <div className="category-item">
          <span>Access Control</span>
        </div>
        <div className="category-item">
          <span>Rack</span>
        </div>
        <div className="category-item">
          <span>UPS</span>
        </div>
        <div className="category-item">
          <span>Other</span>
        </div>
      </div>
    </section>
  );
}
