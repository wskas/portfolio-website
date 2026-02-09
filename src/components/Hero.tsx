const Hero = () => {
    return (
        <section id="hero" className="flex h-screen w-full justify-center items-center text-center">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to My Portfolio</h1>
                <p className="hero-subtitle">Showcasing my projects and skills</p>
                <a href="#projects" className="hero-button">
                    View Projects
                </a>
            </div>

        </section>
    );
}

export default Hero;