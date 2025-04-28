import React from 'react';
import '../../styles.css';
import "./Category.css"

export default function CategorySection() {
  return (
    <section className="category-section-2">
      <h2><i className="fas fa-th-large"></i>Category</h2>
      <div className="category-grid-2">
        <div className="category-item-2">
          <i className="fas fa-microchip"></i>
          <img src="../../../static/ddddd.jpg" alt="Network Product"/>
          <span>Network Product</span>
        </div>
        <div className="category-item-2"><i className="fas fa-microchip"></i><span>เมนบอร์ด</span></div>
        <div className="category-item-2"><i className="fas fa-desktop"></i><span>การ์ดจอ</span></div>
        <div className="category-item-2"><i className="fas fa-memory"></i><span>แรม</span></div>
        <div className="category-item-2"><i className="fas fa-microchip"></i><span>เมนบอร์ด</span></div>
        <div className="category-item-2"><i className="fas fa-desktop"></i><span>การ์ดจอ</span></div>
        <div className="category-item-2"><i className="fas fa-memory"></i><span>แรม</span></div>
        <div className="category-item-2"><i className="fas fa-microchip"></i><span>เมนบอร์ด</span></div>
        <div className="category-item-2"><i className="fas fa-desktop"></i><span>การ์ดจอ</span></div>
        <div className="category-item-2"><i className="fas fa-memory"></i><span>แรม</span></div>
      </div>
    </section>
  );
}
