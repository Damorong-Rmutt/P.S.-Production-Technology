import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbCurrencyBaht } from "react-icons/tb";
import "./ProductPage.css";
const API_BASE = import.meta.env.VITE_API_BASE;
function ProductPage() {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE}/products/${product_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.features === "string") {
          try {
            data.features = JSON.parse(data.features);
          } catch (err) {
            console.error("แปลง features ไม่ได้:", err);
            data.features = [];
          }
        }

        setProduct(data);
        setSelectedImage(data.product_img);
      });
  }, [product_id]);

  if (!product) return <div className="loading">กำลังโหลดข้อมูลสินค้า...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={selectedImage} alt={product.product_name} />
        <div className="thumbnail-gallery">
          {[product.product_img, product.image2, product.ge3]
            .filter(Boolean)
            .map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? "active" : ""}
              />
            ))}
        </div>
      </div>

      <div className="product-info">
        <div className="product-header">
          <p className="product-code">
            {product.product_model}
            {product.is_new === 1 && <span className="new-badge">NEW</span>}
          </p>
          <h1 className="product-name">{product.product_name}</h1>
        </div>

        <div className="product-price">
          {product.is_promotion === 1 ? (
            <>
              <span className="price">
                <TbCurrencyBaht className="baht-icon" />
                {Number(product.product_price).toLocaleString()}
              </span>
              <span className="old-price">
                <TbCurrencyBaht className="baht-icon" />
                {Number(product.product_old_price).toLocaleString()}
              </span>
            </>
          ) : (
            <span className="price">
              <TbCurrencyBaht className="baht-icon" />
              {Number(product.product_old_price).toLocaleString()}
            </span>
          )}
        </div>

        {Array.isArray(product.features) &&
          product.features.map((feat, i) => <li key={i}>{feat}</li>)}

        {product.icons?.length > 0 && (
          <div className="feature-icons">
            {product.icons.map((icon, i) => (
              <img src={icon} key={i} alt="icon" />
            ))}
          </div>
        )}

        {product.models?.length > 0 && (
          <div className="model-list">
            <p>
              <strong>Available models:</strong>
            </p>
            <ul>
              {product.models.map((model, i) => (
                <li key={i}>{model}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="product-actions">
          <a
            className="btn cart"
            href={product.datasheet_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            ดู Datasheet
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
