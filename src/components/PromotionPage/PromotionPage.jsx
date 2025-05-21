import { useState, useEffect } from "react";
import "./PromotionPage.css";
import { TbCurrencyBaht } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom'; // ✅ เพิ่ม useNavigate

const API_BASE = import.meta.env.VITE_API_BASE;

export default function PromotionPage() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate(); // ✅ ใช้งาน navigate

  // 🔥 ดึงหมวดหมู่จาก API
  useEffect(() => {
    fetch(`${API_BASE}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setSelectedCategory(data[0]?.category_code);
      })
      .catch((err) => console.error("โหลดหมวดหมู่ล้มเหลว:", err));
  }, []);

  // 🔥 ดึงสินค้าตามหมวดหมู่จาก API
  useEffect(() => {
    if (selectedCategory) {
      fetch(`${API_BASE}/products?category=${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => {
          const parsed = data.map((p) => ({
            ...p,
            features: typeof p.features === "string" ? JSON.parse(p.features || "[]") : p.features,
            icons: typeof p.icons === "string" ? JSON.parse(p.icons || "[]") : p.icons,
          }));
          setProduct(parsed);
        })
        .catch((err) => console.error("โหลดสินค้าไม่สำเร็จ:", err));
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
            Set Promotion&nbsp;
            <span className="category-red">
              {
                categories.find((cat) => cat.category_code === selectedCategory)
                  ?.category_name
              }
            </span>
        </h3>

        <div className="promotion-grid-2">
          {product.map((product) => (
            <div
              key={product.product_id}
              className="promotion-card"
              onClick={() => navigate(`/product/${product.product_id}`)} // ✅ ไปหน้า Product
            >
              <img src={product.product_img} alt={product.product_name} />
              <p className="name">{product.product_name}</p>

              <div className="price-row">
                {product.is_promotion === 1 ? (
                  <>
                    <span className="price">
                      <span className="baht-icon"><TbCurrencyBaht /></span>
                      {Number(product.product_price).toLocaleString()}
                    </span>
                    <span className="old-price">
                      <span className="baht-icon-2"><TbCurrencyBaht /></span>
                      {Number(product.product_old_price).toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span className="price">
                    <span className="baht-icon"><TbCurrencyBaht /></span>
                    {Number(product.product_old_price).toLocaleString()}
                  </span>
                )}
              </div>

              <p className="description">{product.product_description}</p>
            </div>
          ))}
        </div>

        <Link to="/promotion">
          <button className="view-all-btn">ดูโปรโมชั่นทั้งหมด</button>
        </Link>
      </main>
    </div>
  );
}
