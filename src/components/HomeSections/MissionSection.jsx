import missionImg from '../../assets/images/bottle-perfume-sits-piece-paper.jpg';


export function MissionSection() {
    return (
        <section className="mission-section">  
            <div className="mission-container">  
                <img
                    src={missionImg}
                    alt="Perfume mission"
                    className="mission-image"
                />
                <div className="mission-content">
                    <h2 className="mission-title">
                        We're on a Mission to Craft Timeless Scents
                    </h2>
                    <p className="mission-description">  
                        Discover our curated collection of premium fragrances in our latest Scent Guide.
                    </p>
                </div>
                <button className="mission-button">  
                    <span>DISCOVER MORE</span>  
                </button>
            </div>
        </section>
    );
}

