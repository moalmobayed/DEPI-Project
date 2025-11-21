import { Link } from "react-router-dom";
import productsData from "../../data/products.json";
import categoryImg1 from "../../assets/images/fone.jpg";
import categoryImg2 from "../../assets/images/ftwo.jpg";
import categoryImg3 from "../../assets/images/fthree.jpg";

const categoryImages = {
  Women: categoryImg1,
  Men: categoryImg2,
  Unisex: categoryImg3,
};

export function CategorySection() {
  // Filter out "All" category and get only Women, Men, Unisex
  const displayCategories = productsData.categories.filter(
    (cat) => cat !== "All"
  );

  return (
    <section
      className="d-flex flex-column align-items-center py-5 gap-4 w-100"
      style={{ paddingTop: "90px", paddingBottom: "90px", gap: "25px" }}
    >
      <h2 className="w-100 text-center text-dark mb-0">Shop by Category</h2>
      <div className="row w-100 g-4">
        {displayCategories.map((category, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center gap-3"
          >
            <Link to="/products" state={{ selectedCategory: category }}>
              <img
                src={categoryImages[category]}
                alt={category}
                className="rounded shadow-sm"
                style={{ width: "100%", height: "263px", objectFit: "cover" }}
              />
            </Link>
            <Link
              to="/products"
              state={{ selectedCategory: category }}
              className="w-100 text-center border-0 bg-transparent text-decoration-underline text-dark"
              style={{ letterSpacing: "1.4px" }}
            >
              {category}
            </Link>
          </div>
        ))}
        {displayCategories.map((category, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center gap-3"
          >
            <Link to="/products" state={{ selectedCategory: category }}>
              <img
                src={categoryImages[category]}
                alt={category}
                className="rounded shadow-sm"
                style={{ width: "100%", height: "263px", objectFit: "cover" }}
              />
            </Link>
            <Link
              to="/products"
              state={{ selectedCategory: category }}
              className="w-100 text-center border-0 bg-transparent text-decoration-underline text-dark"
              style={{ letterSpacing: "1.4px" }}
            >
              {category}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
