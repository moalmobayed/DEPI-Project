import woodyImg from '../../assets/images/one.jpg';
import freshImg from '../../assets/images/two.jpg';
import spicyImg from '../../assets/images/192247.jpg';

const collections = [
    {
        title: "New Scents",
        buttonText: "SHOP NEW SCENTS",
        image: spicyImg 
    },
    {
        title: "Best-Sellers",
        buttonText: "SHOP BEST-SELLERS",
        image: freshImg 
    },
    {
        title: "Holiday Fragrances",
        buttonText: "SHOP HOLIDAY",
        image: woodyImg
    }
];

export function FeatureSection() {
    return (
        <section className="featured-section">  
            {collections.map((collection) => (
                <div
                    key={collection.title}
                    className="featured-item"  
                >
                    <img
                        src={collection.image}
                        alt={collection.title}
                        className="featured-image"  
                    />
                    <h2 className="featured-title">  
                        {collection.title}
                    </h2>
                    <button className="featured-button"> 
                        <span>{collection.buttonText}</span>  
                    </button>
                </div>
            ))}
        </section>
    );
}