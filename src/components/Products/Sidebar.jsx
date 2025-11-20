import { useState } from "react";
import { Form, Accordion } from "react-bootstrap";
import "./Sidebar.css";

export default function Sidebar({
  filters,
  setFilters,
  categories,
  brands,
  totalProducts,
}) {
  const [showMoreBrands, setShowMoreBrands] = useState(false);

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category });
  };

  const handleBrandToggle = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    setFilters({ ...filters, brands: newBrands });
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setFilters({ ...filters, priceRange: [0, value] });
  };

  const handleRatingChange = (rating) => {
    setFilters({ ...filters, minRating: rating });
  };

  const displayedBrands = showMoreBrands ? brands : brands.slice(0, 6);

  return (
    <div className="category-sidebar">
      <div className="sidebar-header mb-3">
        <h5 className="fw-bold">{totalProducts} Perfumes</h5>
      </div>

      {/* Category Filter */}
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>
            {categories.map((category) => (
              <Form.Check
                key={category}
                type="radio"
                id={`category-${category}`}
                label={category}
                name="category"
                checked={filters.category === category}
                onChange={() => handleCategoryChange(category)}
                className="mb-2"
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>

        {/* Brand Filter */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Brand</Accordion.Header>
          <Accordion.Body>
            {displayedBrands.map((brand) => (
              <Form.Check
                key={brand}
                type="checkbox"
                id={`brand-${brand}`}
                label={brand}
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="mb-2"
              />
            ))}
            {brands.length > 6 && (
              <button
                className="btn btn-link p-0 text-decoration-none"
                onClick={() => setShowMoreBrands(!showMoreBrands)}
              >
                {showMoreBrands ? "View Less −" : "View More +"}
              </button>
            )}
          </Accordion.Body>
        </Accordion.Item>

        {/* Price Range Filter */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Price Range</Accordion.Header>
          <Accordion.Body>
            <Form.Label>Up to ${filters.priceRange[1]}</Form.Label>
            <Form.Range
              min="0"
              max="300"
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
            />
            <div className="d-flex justify-content-between text-muted small">
              <span>$0</span>
              <span>$300</span>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Rating Filter */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Minimum Rating</Accordion.Header>
          <Accordion.Body>
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <Form.Check
                key={rating}
                type="radio"
                id={`rating-${rating}`}
                label={
                  <span>
                    {rating} <span className="text-warning">★</span> & up
                  </span>
                }
                name="rating"
                checked={filters.minRating === rating}
                onChange={() => handleRatingChange(rating)}
                className="mb-2"
              />
            ))}
            <Form.Check
              type="radio"
              id="rating-all"
              label="All Ratings"
              name="rating"
              checked={filters.minRating === 0}
              onChange={() => handleRatingChange(0)}
              className="mb-2"
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
