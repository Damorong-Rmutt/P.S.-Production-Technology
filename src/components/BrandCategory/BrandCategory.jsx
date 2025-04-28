import { Link } from "react-router-dom";
import "./BrandCategory.css";

export default function BrandCategory() {
  return (
    <section className="brand-category-section">
      <h2>Brand Category</h2>
      <div className="brand-category-grid">
        <div className="brand-category-box"><img src='/static/001.png'/></div>
        <div id="Dahua" className="brand-category-box" ><img src='/static/002.png'/></div>
        <div id="imou"className="brand-category-box"><img src='/static/003.png'/></div>
        <div id="ezviz" className="brand-category-box"><img src='/static/004.png'/></div>
        <div id="hilook" className="brand-category-box"><img src='/static/005.png'/></div>
        <div id="wd"className="brand-category-box"><img src='/static/006.png'/></div>
        <div id ="seagate"className="brand-category-box"><img src='/static/007.png'/></div>
        <div id ="cyberpower"className="brand-category-box"><img src='/static/008.png'/></div>
        <div id="ruijie"className="brand-category-box"><img src='/static/009.png'/></div>
        <div id="reyee" className="brand-category-box"><img src='/static/010.png'/></div>
        <div id="tp-link" className="brand-category-box"><img src='/static/011.png'/></div>
        <div id="zkteno"className="brand-category-box"><img src='/static/012.png'/></div>
        <div className="brand-category-box"><img src='/static/19_GERMANY_LOGO.png'/></div>
        <div id="link" className="brand-category-box"><img src='/static/014.png'/></div>
        <div id="zircon" className="brand-category-box"><img src='/static/015.png'/></div>
      </div>
    </section>
  );
}