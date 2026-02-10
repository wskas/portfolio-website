import { useEffect, useState } from 'react';

const Hero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    function handleScroll() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        setScrollPosition(scrolled);
    }

    function handleClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section id="hero" className="flex h-screen w-full justify-center items-center">
            <div className="hero-content text-left mx-auto">
                <h1 className="text-7xl font-bold mb-4">I'm Winson</h1>
                <p className="text-2xl bg-gradient-to-r from-blue-800 to-purple-400 bg-clip-text text-transparent">Aspiring Full Stack Software Engineer</p>
                <p className="text-lg text-gray-600">Showcasing my projects and skills</p>
                   
                <a  onClick={handleClick} href="#projects" className="hero-button border border-gray-500 text-gray-500 px-3 py-1 rounded-full mt-2 inline-block hover:border-gradient-to-r hover:from-blue-800 hover:to-purple-400 transition-colors duration-300">
                    View Projects
                </a>
            </div>

        </section>
    );
}

export default Hero;