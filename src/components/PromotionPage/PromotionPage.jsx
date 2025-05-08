import { useState, useEffect } from "react";
import "./PromotionPage.css";

export default function PromotionPage() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // 🔥 ดึงหมวดหมู่จาก API
  useEffect(() => {
    fetch('http://192.168.1.153:5000/api/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setSelectedCategory(data[0].category_code); // ตั้งค่าหมวดแรกเป็นค่าเริ่มต้น
      });
  }, []);

  // 🔥 ดึงสินค้าตามหมวดหมู่จาก API
  useEffect(() => {
  if (selectedCategory) {
    fetch(`http://192.168.1.153:5000/api/products?category=${selectedCategory}`)
      .then(res => res.json())
      .then(data => {
        console.log("ข้อมูลสินค้าจาก API:", data);
        if (Array.isArray(data)) {
          setProduct(data);
        } else {
          console.error("ข้อมูลไม่ใช่ array:", data);
          setProduct([]); // แก้ไขชั่วคราว
        }
      })
      .catch(err => console.error("Fetch Error:", err));
  }
}, [selectedCategory]);

  return (
    <div className="promotion-page">
      <aside className="promotion-sidebar">
        <h2>โปรโมชั่นพิเศษประจำเดือน</h2>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat.category_id}
              className={selectedCategory === cat.category_code ? "active" : ""}
              onClick={() => setSelectedCategory(cat.category_code)}
            >
              {cat.category_name}
            </li>
          ))}
        </ul>
        <img src="https://place-hold.it/210x90" alt="banner" />
      </aside>
      <main className="promotion-content">
        <h3>
          <p>Set Promotion&nbsp;
            {categories.find((cat) => cat.category_code === selectedCategory)?.category_name}
          </p>
        </h3>
        <div className="promotion-grid-2">
          {product.map((product) => (
            <div key={product.product_id} className="promotion-card">
              <img src={product.product_img} alt={product.product_name} />
              <p className="name">{product.product_name}</p>
              <div className="price-row">
                <span className="price">฿{product.product_price.toLocaleString()}</span>
                <span className="old-price">
                  ฿{product.product_old_price.toLocaleString()}
                </span>
              </div>
              <p className="description">{product.product_description}</p>
            </div>
          ))}
        </div>
        <button className="view-all-btn">ดูโปรโมชั่นทั้งหมด</button>
      </main>
    </div>
  );
}
