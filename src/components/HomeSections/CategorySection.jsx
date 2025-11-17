
import categoryImg1 from '../../assets/images/fone.jpg';
import categoryImg2 from '../../assets/images/ftwo.jpg';
import categoryImg3 from '../../assets/images/fthree.jpg';
import categoryImg4 from '../../assets/images/ffour.jpg';
import categoryImg5 from '../../assets/images/ffive.jpg';
import categoryImg6 from '../../assets/images/192247.jpg';

const categories = [
  { name: "FLORAL", image: categoryImg1 },
  { name: "ORIENTAL", image: categoryImg2 },
  { name: "CITRUS", image: categoryImg3 },
  { name: "WOODY", image: categoryImg4 },
  { name: "FRESH", image: categoryImg5 },
  { name: "SPICY", image: categoryImg6 }
];

export function CategorySection() {
  return (
    <section className="d-flex flex-column align-items-center py-5 gap-4 w-100" style={{ paddingTop: '90px', paddingBottom: '90px', gap: '25px' }}>
      <h2 className="w-100 text-center text-dark mb-0">Shop by Scent</h2>
      <div className="row w-100 g-4">
        {categories.map((category, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center gap-3">
            <img
              src={category.image}
              alt={category.name}
              className="rounded shadow-sm"
              style={{ width: '100%', height: '263px', objectFit: 'cover' }}
            />
            <button className="w-100 text-center border-0 bg-transparent text-decoration-underline text-dark" style={{ letterSpacing: '1.4px' }}>
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}