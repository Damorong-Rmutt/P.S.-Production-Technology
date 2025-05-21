import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbCurrencyBaht } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./PromotionMain.css";
const API_BASE = import.meta.env.VITE_API_BASE;

const PromotionMain = () => {
  const [groupedPromotions, setGroupedPromotions] = useState({});

  useEffect(() => {
    axios
      .get(`${API_BASE}/promotions/by-category`)
      .then((res) => {
        setGroupedPromotions(res.data);
      })
      .catch((err) => {
        console.error("โหลดโปรโมชั่นล้มเหลว:", err);
      });
  }, []);

  return (
    <div>
      <h2 className="promo-heading">🔥 โปรโมชั่นแนะนำประจำเดือน</h2>

      {Object.entries(groupedPromotions).map(([categoryName, items]) => (
        <PromoRow key={categoryName} title={categoryName} items={items} />
      ))}
    </div>
  );
};

const PromoRow = ({ title, items }) => {
  const [offset, setOffset] = useState(0);
  const cardWidth = 240;
  const visibleCount = 4;
  const maxOffset = Math.max(0, (items.length - visibleCount) * cardWidth);
  const navigate = useNavigate();

  const scrollLeft = () => {
    setOffset((prev) => Math.max(prev - cardWidth, 0));
  };

  const scrollRight = () => {
    setOffset((prev) => Math.min(prev + cardWidth, maxOffset));
  };

  const bannerImages = {
    hikvision: "/static/ddddd.jpg",
    dahua: "/static/ddddd.jpg",
    imou: "/static/ddddd.jpg",
    ezviz: "/static/ddddd.jpg",
    hilook: "/static/ddddd.jpg",
    link: "/static/ddddd.jpg",
    apollo: "/static/ddddd.jpg",
    default: "/static/default.jpg"
  };

  return (
    <div className="promo-row">
      <h3 className="promo-subheading">{title}</h3>

      <div className="promo-wrapper">
        <div className="promo-banner">
          <img
            src={bannerImages[title.toLowerCase()] || bannerImages.default}
            alt={`โปรโมชั่น ${title}`}
          />
          <div className="ribbon">NEW</div>
        </div>

        <div className="promo-scroll-container">
          <button
            className="scroll-btn left"
            onClick={scrollLeft}
            disabled={offset === 0}
          >
            <BsArrowLeft />
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {items.map((item) => (
                <div
                  className="promo-card"
                  key={item.id}
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="discount-tag">-{item.discount}%</div>
                  <img src={item.image} alt={item.name} />
                  <div className="promo-details">
                    <p className="promo-name">{item.name}</p>
                    <div className="price">
                      <span className="new-price">
                        <span className="baht-icon">
                          <TbCurrencyBaht />
                        </span>
                        {item.price.toLocaleString()}
                      </span>
                      <span className="old-price">
                        <span className="baht-icon-2">
                          <TbCurrencyBaht />
                        </span>
                        {item.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="scroll-btn right"
            onClick={scrollRight}
            disabled={offset >= maxOffset}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionMain;
