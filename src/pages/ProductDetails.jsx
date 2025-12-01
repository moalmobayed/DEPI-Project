import { Container, Spinner } from "react-bootstrap";
import Product from "../components/Product";
import Breadcrumb from "../components/Breadcrumb";
import "./Products.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import Reviews from "../components/Reviews";
import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";
import frame4 from "../assets/images/frame4.png";
import frame5 from "../assets/images/frame5.png";
import RecommendedProducts from "../components/RecommendedProducts";
import productsData from "../data/products.json";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const category = "Fragrances";

  useEffect(() => {
    const foundProduct = productsData.perfumes.find(
      (p) => p.id === parseInt(id)
    );
    setProduct(foundProduct);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status" />
        <p>Loading product...</p>
      </Container>
    );
  }

  if (!product) {
    return <p className="text-center mt-5">Product not found</p>;
  }

  return (
    <Container className="mt-5">
      <Breadcrumb category={category} product={product.name} />
      <div className="products-section">
        <div className="products-gallery">
          <Product
            key={product.id}
            title={product.name}
            images={product.images}
            discount={product.discount}
            price={product.price}
          />
        </div>

        <div className="product-details-section" style={{ marginTop: "20px" }}>
          <div className="title-bar">
            <h2 className="pro-title">{product.name}</h2>

            <div className="prices">
              <span className="old-price">${product.originalPrice}</span>
            </div>
          </div>

          <span className="rating"> Rating : {product.rating}</span>

          <h3 className="small-title">Dimensions:</h3>
          <ul className="dimentions-list">
            <li>width : N/A</li>
            <li>height : N/A</li>
            <li>depth : N/A</li>
          </ul>

          <button className="add-cart">add to bag</button>

          <div className="features">
            <div className="feature-block">
              <img src={icon1} />
              <div className="feature-text-block">
                <h6 className="feature-title">Free shipping</h6>
                <p className="feature-disc">
                  On all U.S. orders over $100 Learn more.
                </p>
              </div>
            </div>

            <div className="feature-block">
              <img src={icon2} />
              <div className="feature-text-block">
                <h6 className="feature-title">Easy Returns</h6>
                <p className="feature-disc">
                  Extended returns through January 31. Returns Details.
                </p>
              </div>
            </div>

            <div className="feature-block">
              <img src={icon3} />
              <div className="feature-text-block">
                <h6 className="feature-title">Send It As A Gift</h6>
                <p className="feature-disc">
                  Add a free personalized note during checkout.
                </p>
              </div>
            </div>

            <h3 className="small-title">Description:</h3>
            <p className="disc">{product.description}</p>
          </div>
        </div>
      </div>

      <div className="recommendation-section">
        <RecommendedProducts />
      </div>

      <Reviews productId={product.id} />

      <div className="transparent-section">
        <h2 className="titlee">transparent pricing</h2>
        <p className="transparent-disc">
          We publish what it costs us to make every one of our products...
        </p>

        <div className="transport-list">
          <img src={frame1} />
          <img src={frame2} />
          <img src={frame3} />
          <img src={frame4} />
          <img src={frame5} />
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
