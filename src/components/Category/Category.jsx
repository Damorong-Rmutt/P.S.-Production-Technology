import React, { useEffect, useState } from 'react';
import '../../styles.css';
import "./Category.css";
import { useNavigate } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE;

export default function CategorySection() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/types`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  const goToCategory = (id, name) => {
    const slug = name.replace(/\s+/g, '-');
    navigate(`/category/${id}/${slug}`);
  };

  return (
    <section className="category-section-2">
      <h2><i className="fas fa-th-large"></i>หมวดหมู่สินค้า</h2>
      <div className="category-grid-2">
        {categories.map((cat) => (
          <div key={cat.type_id} className="category-item-2" onClick={() => goToCategory(cat.type_id, cat.type_name)}>
            <img src={`/static/${cat.type_image}`} alt={cat.type_name} />
            <span>{cat.type_name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
