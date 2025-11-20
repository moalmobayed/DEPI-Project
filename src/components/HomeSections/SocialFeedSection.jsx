import { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import social1Img from '../../assets/images/on1.jpg';
import social2Img from '../../assets/images/on2.jpg';
import social3Img from '../../assets/images/fmain.jpg';
import social4Img from '../../assets/images/on4.jpg';
import social5Img from '../../assets/images/one.jpg';
import social6Img from '../../assets/images/ffive.jpg';
import social7Img from '../../assets/images/two.jpg';
import social8Img from '../../assets/images/fseven.jpg';
import social9Img from '../../assets/images/fsix.jpg';
import social10Img from '../../assets/images/ffive.jpg';

const socialImages = [
  social1Img,
  social2Img,
  social3Img,
  social4Img,
  social5Img,
  social6Img,
  social7Img,
  social8Img,
  social9Img,
  social10Img
];

export function SocialFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 5;
  const maxIndex = socialImages.length - visibleImages;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="d-flex flex-column align-items-center px-5 gap-3 w-100">
      <div className="d-flex flex-column align-items-center px-5 pt-5 w-100 border-top" style={{ paddingTop: '90px', borderTopColor: '#262626', gap: '25px' }}>
        <h2 className="w-100 text-center text-dark mb-0">Perfume On You</h2>
        <div className="d-flex flex-column align-items-center gap-1 w-100">
          <p className="w-100 text-center text-dark mb-0" style={{ letterSpacing: '1.4px' }}>
            Share your latest scent with #PerfumeOnYou for a chance to be featured.
          </p>
          <button className="w-100 text-center text-dark border-0 bg-transparent text-decoration-underline" style={{ letterSpacing: '1.4px' }}>
            Add Your Photo
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-start gap-3 w-100 position-relative" style={{ height: '225px' }}>
        <div className="d-flex justify-content-center align-items-center position-absolute start-0 top-50 translate-middle-y z-3" style={{ width: '40px', height: '40px' }}>
          <button 
            className="d-flex justify-content-center align-items-center border-0 bg-white rounded-circle shadow-sm" 
            style={{ width: '40px', height: '40px' }}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-100 h-100 text-dark" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
        <div className="d-flex gap-3 w-100 overflow-hidden position-relative" style={{ height: '225px' }}>
          <div 
            className="d-flex gap-3"
            style={{ 
              transform: `translateX(-${currentIndex * 20}%)`, 
              transition: 'transform 0.3s ease-in-out',
              width: `${socialImages.length * 20}%`
            }}
          >
            {socialImages.map((image, index) => (
              <div key={index} className="position-relative flex-1" style={{ minWidth: '20%', height: '225px' }}>
                <img
                  src={image}
                  alt={`Social post ${currentIndex + index + 1}`}
                  className="position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 rounded"
                  style={{ objectFit: 'cover' }}
                />
                <button className="position-absolute end-0 bottom-0 me-2 mb-2 bg-white rounded-circle d-flex align-items-center justify-content-center border-0 shadow-sm z-3" style={{ width: '30px', height: '30px' }}>
                  <ShoppingCart className="w-100 h-100 text-dark" style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center position-absolute end-0 top-50 translate-middle-y z-3" style={{ width: '40px', height: '40px' }}>
          <button 
            className="d-flex justify-content-center align-items-center border-0 bg-white rounded-circle shadow-sm" 
            style={{ width: '40px', height: '40px' }}
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-100 h-100 text-dark" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </div>
    </section>
  );
}