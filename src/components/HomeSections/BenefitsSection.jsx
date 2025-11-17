
import { Truck, Leaf, Clock } from "lucide-react";

export function BenefitsSection() {
  return (
    <section
      className="d-flex flex-column flex-md-row align-items-start px-3 px-md-5 py-5 gap-4 w-100"
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      
      <div
        className="d-flex flex-column align-items-center px-2 px-md-4 gap-3 flex-grow-1"
        style={{ gap: "20px" }}
      >
        <div
          className="bg-light rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "70px", height: "70px" }}
        >
          <Truck className="text-primary" style={{ width: "30px", height: "30px" }} />
        </div>

        <div className="d-flex flex-column align-items-center gap-1 w-100">
          <h4 className="w-100 text-center text-dark mb-0" style={{ letterSpacing: "0.42px" }}>
            Free Shipping on Orders Over $50
          </h4>
          <p className="w-100 text-center text-dark mb-0" style={{ letterSpacing: "1.4px" }}>
            Enjoy free shipping on orders over $50.
          </p>
        </div>
      </div>

      
      <div
        className="d-flex flex-column align-items-center px-2 px-md-4 gap-3 flex-grow-1"
        style={{ gap: "20px" }}
      >
        <div
          className="bg-light rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "70px", height: "70px" }}
        >
          <Leaf className="text-success" style={{ width: "30px", height: "30px" }} />
        </div>

        <div className="d-flex flex-column align-items-center gap-1 w-100">
          <h4 className="w-100 text-center text-dark mb-0" style={{ letterSpacing: "0.42px" }}>
            Ethically Sourced
          </h4>
          <p className="w-100 text-center text-dark mb-0" style={{ letterSpacing: "1.4px" }}>
            Designed with you and the planet in mind.
          </p>
        </div>
      </div>

      
      <div
        className="d-flex flex-column align-items-center px-2 px-md-4 gap-3 flex-grow-1"
        style={{ gap: "20px" }}
      >
        <div
          className="bg-light rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "70px", height: "70px" }}
        >
          <Clock className="text-info" style={{ width: "30px", height: "30px" }} />
        </div>

        <div className="d-flex flex-column align-items-center gap-1 w-100">
          <h4 className="w-100 text-center text-dark mb-0" style={{ letterSpacing: "0.42px" }}>
            Fast Delivery
          </h4>
          <p className="w-100 text-center text-dark mb-0" style={{ letterSpacing: "1.4px" }}>
            We have express delivery across the region.
          </p>
        </div>
      </div>
    </section>
  );
}
