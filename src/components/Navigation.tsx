import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';

const Navigation = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleScroll() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        setScrollPosition(scrolled);
    }

    function handleClick(e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (href) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className="header-container fixed top-0 left-0 z-50">
            <div className="header flex w-screen justify-between items-center p-4 bg-white shadow-md px-[5%]">
                <img src="vite.svg" alt="Personal Logo" className="mr-auto"/>
                <button 
                    className="hamburger-menu block md:hidden ml-5" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <>
                            <span className="block w-6 h-0.5 bg-black mb-1 rotate-45 translate-y-1"></span>
                            <span className="block w-6 h-0.5 bg-black mb-1 opacity-0"></span>
                            <span className="block w-6 h-0.5 bg-black -rotate-45 -translate-y-1"></span>
                        </>
                    ) : (
                        <>
                            <span className="block w-6 h-0.5 bg-black mb-1"></span>
                            <span className="block w-6 h-0.5 bg-black mb-1"></span>
                            <span className="block w-6 h-0.5 bg-black"></span>
                        </>
                    )}
                </button>
                <div className={`nav-links md:flex flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:block bg-white md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto shadow-md md:shadow-none`}>
                    <a onClick={handleClick} href="#hero" className="ml-5 py-2 md:py-0">Home</a>
                    <a onClick={handleClick} href="#about" className="ml-5 py-2 md:py-0">About</a>
                    <a onClick={handleClick} href="#projects" className="ml-5 py-2 md:py-0">Projects</a>
                    <a onClick={handleClick} href="#workexperiences" className="ml-5 py-2 md:py-0">Experience</a>
                    {/* <a onClick={handleClick} href="#contactme" className="ml-5 py-2 md:py-0">Contact</a> */}
                </div>
            </div>
            <div className="progress-container w-screen h-1 bg-[#f3f3f3]" >
                <div
                    className="progress-bar h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${scrollPosition}%` }}
                />
            </div>
        </div>
    )
}

export default Navigation;