
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonialImg1 from '../../assets/images/fsix.jpg';
import testimonialImg2 from '../../assets/images/two.jpg';
import testimonialImg3 from '../../assets/images/one.jpg';


const testimonials = [
  {
    quote: "Love this perfume! Lasts all day and smells divine.",
    attribution: "-- Jane D., Eternal Rose Eau de Parfum",
    image: testimonialImg1
  },
  {
    quote: "The best fragrance I've tried. Elegant and long-lasting.",
    attribution: "-- Alex S., Midnight Oud Signature",
    image: testimonialImg2
  },
  {
    quote: "Perfect fresh scent for summer. Highly recommend!",
    attribution: "-- Sarah K., Citrus Breeze Organic Mist",
    image: testimonialImg3
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonials.length - 1;

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        
        <button 
          className="arrow-btn" 
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="arrow-icon" />
        </button>

        <div className="testimonial-text-box">
          <p className="people-title">People Are Talking</p>

          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="star" />
            ))}
          </div>

          <p className="quote">{testimonials[currentIndex].quote}</p>
          <p className="attribution">{testimonials[currentIndex].attribution}</p>
        </div>

        <div className="testimonial-image-box">
          <img 
            src={testimonials[currentIndex].image} 
            alt="Customer testimonial"
            className="testimonial-image"
          />
        </div>

        <button 
          className="arrow-btn" 
          onClick={() => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))}
          disabled={currentIndex === maxIndex}
        >
          <ChevronRight className="arrow-icon" />
        </button>
      </div>

      <div className="testimonial-controls">
        <div className="dots">
          {Array.from({ length: testimonials.length }).map((_, i) => (
            <div key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} />
          ))}
        </div>
        <hr className="testimonial-divider" />
      </div>
    </section>
  );
}
