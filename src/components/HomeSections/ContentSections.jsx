 import giftImg from '../../assets/images/fav.jpg';
import sustainableImg from '../../assets/images/bac1.jpg';

export function ContentSections() {
  return (
    <section className="d-flex align-items-start px-5 py-5 gap-4 w-100" style={{ paddingLeft: '185px', paddingRight: '185px', paddingTop: '90px', paddingBottom: '90px', gap: '20px' }}>
      <div className="d-flex flex-column align-items-center gap-3 flex-grow-1">
        <h3 className="w-100 text-center text-dark mb-0">Holiday Fragrance Picks</h3>
        <img
          src={giftImg}
          alt="Holiday fragrance picks"
          className="w-100 rounded"
          style={{ height: '626px', objectFit: 'cover' }}
        />
        <p className="w-100 text-center text-dark mb-0" style={{ letterSpacing: '1.4px' }}>
          The best scents for everyone on your list.
        </p>
        <button className="d-flex justify-content-center align-items-center py-3 px-4 gap-2 w-100 border-0 bg-transparent">
          <span className="text-dark text-decoration-underline" style={{ letterSpacing: '1.4px' }}>Read More</span>
        </button>
      </div>
      <div className="d-flex flex-column align-items-center gap-3 flex-grow-1">
        <h3 className="w-100 text-center text-dark mb-0">Sustainable Scents</h3>
        <img
          src={sustainableImg}
          alt="Sustainable scents"
          className="w-100 rounded"
          style={{ height: '626px', objectFit: 'cover' }}
        />
        <p className="w-100 text-center text-dark mb-0" style={{ letterSpacing: '1.4px' }}>
          See the sustainability efforts behind each of our fragrances.
        </p>
        <button className="d-flex justify-content-center align-items-center py-3 px-4 gap-2 w-100 border-0 bg-transparent">
          <span className="text-dark text-decoration-underline" style={{ letterSpacing: '1.4px' }}>Learn More</span>
        </button>
      </div>
    </section>
  );
}