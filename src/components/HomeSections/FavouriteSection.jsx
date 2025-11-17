import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import product1Img from '../../assets/images/ffive.jpg';
import product2Img from '../../assets/images/fav2.jpg';
import product3Img from '../../assets/images/192247.jpg';
import product4Img from '../../assets/images/ftwo.jpg';
import product5Img from '../../assets/images/ffive.jpg';
import product6Img from '../../assets/images/fav2.jpg';
import product7Img from '../../assets/images/192247.jpg';
import product8Img from '../../assets/images/ffive.jpg';

const products = [
  {
    name: "Eternal Rose Eau de Parfum",
    price: "$120",
    color: "Rose Gold",
    image: product1Img
  },
  {
    name: "Midnight Oud Signature",
    price: "$148",
    color: "Deep Amber",
    image: product2Img
  },
  {
    name: "Citrus Breeze Organic Mist",
    price: "$98",
    color: "Fresh Lemon",
    image: product3Img
  },
  {
    name: "Velvet Vanilla Essential",
    price: "$80",
    color: "Warm Vanilla",
    image: product4Img
  },
  {
    name: "Ocean Whisper Cologne",
    price: "$110",
    color: "Aqua Blue",
    image: product5Img
  },
  {
    name: "Spicy Ember Intense",
    price: "$135",
    color: "Fiery Red",
    image: product6Img
  },
  {
    name: "Lavender Dream Spray",
    price: "$75",
    color: "Soft Purple",
    image: product7Img
  },
  {
    name: "Sandalwood Legacy",
    price: "$95",
    color: "Earthy Brown",
    image: product8Img
  }
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 4;
  const maxIndex = products.length - visibleProducts;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="d-flex flex-column align-items-start px-0 py-5 mb-4 w-100" style={{ paddingTop: '90px', paddingBottom: '73px', gap: '30px' }}>
      <div className="d-flex flex-column align-items-center px-5 gap-3 w-100">
        <h2 className="w-100 text-center text-dark mb-0">Perfume Favorites</h2>
        <p className="w-100 text-center text-dark mb-0" style={{ letterSpacing: '0.64px' }}>
          Beautifully Crafted. Timeless Scents. Ethically Sourced.
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-start gap-3 w-100 position-relative">
        <div className="d-flex justify-content-center align-items-center" style={{ width: '40px', height: '477px', zIndex: 1 }}>
          <button 
            className="d-flex justify-content-center align-items-center border-0 bg-transparent" 
            style={{ width: '40px', height: '40px' }}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-100 h-100 text-dark" style={{ width: '40px', height: '40px' }} />
          </button>
        </div>
        <div 
          className="d-flex gap-3 w-100 overflow-hidden" 
          style={{ 
            width: '100%',
            height: '477px'
          }}
        >
          <div 
            className="d-flex gap-3"
            style={{ 
              transform: `translateX(-${currentIndex * 25}%)`,
              transition: 'transform 0.3s ease-in-out',
              width: `${products.length * 25}%`
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="d-flex flex-column align-items-center gap-1 flex-1" style={{ minWidth: '25%' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 h-100 object-fit-cover rounded"
                  style={{ height: '420px', objectFit: 'cover' }}
                />
                <div className="d-flex flex-column align-items-start gap-1 w-100">
                  <div className="d-flex align-items-start gap-3 w-100">
                    <span className="flex-grow-1 text-start text-dark" style={{ letterSpacing: '0.2px' }}>{product.name}</span>
                    <span className="text-end text-dark ms-auto" style={{ letterSpacing: '0.2px' }}>{product.price}</span>
                  </div>
                  <span className="w-100 text-muted" style={{ letterSpacing: '0.2px' }}>{product.color}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center" style={{ width: '40px', height: '477px', zIndex: 1 }}>
          <button 
            className="d-flex justify-content-center align-items-center border-0 bg-transparent" 
            style={{ width: '40px', height: '40px' }}
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-100 h-100 text-dark" style={{ width: '40px', height: '40px' }} />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center py-3 gap-2 w-100">
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <div 
            key={i} 
            className={`rounded-circle ${i === currentIndex ? 'bg-dark' : 'bg-light'}`} 
            style={{ width: '7px', height: '7px' }} 
          />
        ))}
      </div>
    </section>
  );
}