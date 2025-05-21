import React, { useEffect, useState, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./CategoryPage.css";
import "./Filter.css";
const API_BASE = import.meta.env.VITE_API_BASE;
function CategoryPage() {
  const { type_id, type_name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const pageFromURL = parseInt(query.get("page")) || 1;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageFromURL);
  const [totalPages, setTotalPages] = useState(1);
  const [openFilters, setOpenFilters] = useState({});
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchProducts = useCallback(() => {
    const params = new URLSearchParams();
    params.append("page", currentPage);
    params.append("sort", sortOrder);
    Object.keys(selectedFilters).forEach((key) => {
      selectedFilters[key].forEach((value) => {
        params.append(key === "Brand" ? "category_id" : key, value); // ส่ง category_id แทน Brand
      });
    });

    fetch(`${API_BASE}/products/category/${type_id}?${params}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.products) {
          setProducts(data.products);
          setTotalPages(Math.ceil(data.total / 16));
        } else {
          setProducts([]);
          setTotalPages(1);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setProducts([]);
        setTotalPages(1);
      });
  }, [type_id, currentPage, selectedFilters, sortOrder]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts();
  }, [selectedFilters]);

  useEffect(() => {
    fetch(`${API_BASE}/filters/${type_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFilters(data);
        } else {
          setFilters([]);
        }
      })
      .catch((err) => {
        console.error("Filter fetch error:", err);
        setFilters([]);
      });
  }, [type_id]);

  useEffect(() => {
    setCurrentPage(pageFromURL);
  }, [location.search]);

  const handlePageClick = (page) => {
    navigate(`/category/${type_id}/${type_name}?page=${page}`);
  };

  const toggleFilter = (title) => {
    setOpenFilters((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleFilterChange = (title, value) => {
    setSelectedFilters((prev) => {
      const values = prev[title] || [];
      const newValues = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];
      return { ...prev, [title]: newValues };
    });
  };

  return (
    <div className="category-container">
      <div className="filter-sidebar">
        <select
          className="sort-dropdown"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">ราคาต่ำ-สูง</option>
          <option value="desc">ราคาสูง-ต่ำ</option>
        </select>

        <div className="accordion-filters">
          {Array.isArray(filters) &&
            filters.map(({ title, options }) => (
              <div key={title} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleFilter(title)}
                >
                  {title} ▼
                </div>
                {openFilters[title] && (
                  <div className="accordion-content">
                    {options.map(({ id, name }) => (
                      <label key={id}>
                        <input
                          type="checkbox"
                          checked={
                            selectedFilters[title]?.includes(id) || false
                          }
                          onChange={() => handleFilterChange(title, id)}
                        />{" "}
                        {name}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="category-content">
        <div className="product-count">{products.length} Products Match</div>
        <div className="category-grid-3">
          {products.map((product) => (
            <div
              key={product.product_id}
              className="category-card"
              onClick={() => navigate(`/product/${product.product_id}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={product.product_img} alt={product.product_name} />
              <h5>{product.product_name}</h5>
              <p className="description">{product.product_description}</p>
              <div className="price-add">
                <span className="price">
                  {Number(product.product_price).toLocaleString()} บาท
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageClick(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
