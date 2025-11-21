import { useState } from "react";
import { Container, Button, Offcanvas } from "react-bootstrap";
import { Filter } from "lucide-react";
import ProductList from "../components/Products/ProductList";
import Sidebar from "../components/Products/Sidebar";
import "../components/Products/Card.css";
import "../components/Products/Sidebar.css";
import perfumesData from "../data/products.json";

export default function Products() {
  const [filters, setFilters] = useState({
    category: "All",
    brands: [],
    priceRange: [0, 300],
    minRating: 0,
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const allPerfumes = perfumesData.perfumes;

  // Apply filters
  const filteredPerfumes = allPerfumes.filter((perfume) => {
    // Category filter
    if (filters.category !== "All" && perfume.category !== filters.category) {
      return false;
    }

    // Brand filter
    if (filters.brands.length > 0 && !filters.brands.includes(perfume.brand)) {
      return false;
    }

    // Price filter
    if (
      perfume.price < filters.priceRange[0] ||
      perfume.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Rating filter
    if (perfume.rating < filters.minRating) {
      return false;
    }

    return true;
  });

  return (
    <div className="products-page">
      {/* Desktop Sidebar */}
      <div className="d-none d-lg-block">
        <Sidebar
          filters={filters}
          setFilters={setFilters}
          categories={perfumesData.categories}
          brands={perfumesData.brands}
          totalProducts={filteredPerfumes.length}
        />
      </div>

      {/* Mobile Filter Button */}
      <div
        className="d-lg-none position-fixed bottom-0 start-0 end-0 p-3 bg-white border-top"
        style={{ zIndex: 1000 }}
      >
        <Button
          variant="dark"
          className="w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={() => setShowMobileFilters(true)}
        >
          <Filter size={20} />
          Filters ({filteredPerfumes.length} products)
        </Button>
      </div>

      {/* Mobile Sidebar (Offcanvas) */}
      <Offcanvas
        show={showMobileFilters}
        onHide={() => setShowMobileFilters(false)}
        placement="start"
        className="d-lg-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar
            filters={filters}
            setFilters={setFilters}
            categories={perfumesData.categories}
            brands={perfumesData.brands}
            totalProducts={filteredPerfumes.length}
            isMobile={true}
          />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <div className="products-container mt-5">
        <h1 className="text-center mb-4">Perfume Collection</h1>
        <ProductList products={filteredPerfumes} />
      </div>
    </div>
  );
}
