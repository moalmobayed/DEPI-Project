import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";
import storyImg from "../assets/images/storyImg.png";
import perfume from "../assets/images/perfume.png";
import leaf from "../assets/images/leaf.png";
import globe from "../assets/images/globe.png";
import perfume_video from "../assets/images/perfume_video.mp4";

function About() {
  return (
    /*About us*/
    <container className="my-5">
      <Container className="my-5">
        <Row className="align-items-center mb-5 g-5">
          <Col md={6} className="p-3">
            <h1 className="display-4 fw-bold mb-4">About Us</h1> 

            <div className="mb-4"> 
              <h3 className="text-dark">Our Story</h3>
              <p className="lead">
                Founded in 2025, Bravo Sierra is the culmination of a dream to create products that touch hearts and elevate moments. Our journey is guided by a deep love for fragrance and a commitment to excellence.
              </p>
            </div>

            <div>
              <h3 className="text-dark">Our Value</h3>
              <p className="lead">
                Our values are the pillars of our brand. We stand for elegance in every note, authenticity in every essence, and transparency in every interaction. Explore the values that drive us forward.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img 
              src={storyImg} 
              alt="Perfume_Image" 
              className="img-fluid rounded-5 shadow-lg" 
              />
          </Col>
        </Row>
      </Container>

      {/* Why choose us */}
      <Container fluid className="choose py-5">
        <Row className="text-center mb-5 f-row">
          <Col>
            <h1 className="mb-5 choose-us">Why Choose Us</h1>
            <p className="lead">
              By using clean, skin-kind ingredients that smell great and eliminate B.O. Period.
              It is personal care you can count on, even in the most demanding conditions.
              We strive to always minimize our impact on the planet (our infinitely recyclable
              aluminum refill cans will vouch for that). And all of our products are 100% made
              in the USA by people we know and trust. No animal testing and no animal-derived
              ingredients.
            </p>
          </Col>
        </Row>

        <Row className="text-center g-4 s-row">
          <Col md={4}>
            <img src={perfume}
            alt="Perfume_Image"
            className="icon-style" />
            <h2 className="mb-3 mt-4">Crafted with Passion</h2>
            <p className="fw-light">
              Our perfumers pour their passion and expertise into every creation. Each perfume
              is a work of art, meticulously crafted with a deep appreciation for fragrance
              composition and a commitment to the highest quality.
            </p>
          </Col>

          <Col md={4}>
            <img src={leaf}
            alt="Leaf_Image"
            className="icon-style" />
            <h2 className="mb-3 mt-4">Natural Ingredients</h2>
            <p className="fw-light">
              We believe in the power of natural ingredients. Our perfumes are formulated with
              care, using responsibly sourced, natural essences and oils. Experience the purity
              and authenticity of our scents.
            </p>
          </Col>

          <Col md={4}>
            <img src={globe}
            alt="Globe_Image"
            className="icon-style" />
            <h2 className="mb-3 mt-4">Sustainability</h2>
            <p className="fw-light">
              At our brand, we are dedicated to sustainable practices. Our brand is eco-friendly,
              and we strive to minimize our environmental footprint. Beauty should be kind to both
              people and the planet.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Our vision */}
      <Container className="my-5"> 
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <div className="video-wrapper">
              <video 
              src={perfume_video} 
              className="w-100 perfume-video-element rounded-5" 
              autoPlay
              loop
              muted
              controls
              />
            </div>

          </Col>
        </Row>

        <Row className="text-center justify-content-center">
          <Col lg={12} md={10}>
            <h1 className="display-4 fw-bold mb-3">Our Vision</h1>
            <p className="lead text-muted">
            At our perfume store, we aim to provide a unique experience for fragrance enthusiasts, where exquisite taste meets high-quality products. Our vision is to become the go-to destination for anyone seeking distinctive scents that reflect their personality and add a touch of elegance to their day. We believe that a perfume is not just a fragrance, It is a language that expresses style and taste, which is why we carefully select each product to ensure our customers enjoy the perfect aromatic experience.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Trending Now */}
      <Container fluid className="trending"> 
        <Row className="text-center justify-content-center pt-5 pb-5">
          <Col lg={8} md={10}>
            <h1 className="display-2 fw-bold mb-5 trending-title text-white">Trending Now</h1>
            <p className="lead text-white mb-4">
            Discover our most sought-after fragrances that are taking the spotlight this season. Chanel Coco Noir captivates with its deep, sensual blend—perfect for those who love a bold and sophisticated presence. Calvin Klein CK One remains a timeless favorite, offering a fresh, clean scent that suits every style and every moment. For those who prefer something floral and modern, Gucci Bloom delivers a soft yet expressive aroma that embodies elegance and femininity. These top-trending picks are customer favorites for a reason—each one leaves a memorable impression.
            </p>
            <Button 
            variant="light"
            onClick={() => window.open("#", "_blank")} 
            className="buy-button mt-3 buy-button">
            Buy Now
            </Button>
          </Col>
        </Row>
      </Container>
    </container>
  );
}

export default About;