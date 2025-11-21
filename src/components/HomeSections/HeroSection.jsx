import heroBg from '../../assets/images/hero.jpg';

export function HeroSection() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-content container">
                <h1>Discover Your Perfect Scent</h1>
                <p>Explore our curated collection of premium perfumes from around the
                    world. Find the fragrance that defines you.</p>
                <a href="/products" className="shop">Shop Now</a>
            </div>
        </section>
    );
}

