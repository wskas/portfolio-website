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

    function handleMenuItemClick(e: MouseEvent<HTMLAnchorElement>) {
        handleClick(e);
        setIsMenuOpen(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className="header-container fixed top-0 left-0 z-50 w-screen">
            <div className="header flex w-full justify-between items-center p-4 bg-white shadow-md px-[5%]">
                <img src="personalLogo.png" alt="Personal Logo" className="mr-auto w-8 h-8"/>
                {/* Desktop nav */}
                <div className="hidden md:flex items-center">
                    <a onClick={handleClick} href="#hero" className="ml-5">Home</a>
                    <a onClick={handleClick} href="#about" className="ml-5">About</a>
                    <a onClick={handleClick} href="#projects" className="ml-5">Projects</a>
                    <a onClick={handleClick} href="#workexperiences" className="ml-5">Experience</a>
                </div>
                {/* Mobile hamburger button */}
                <button
                    className="md:hidden ml-5 flex flex-col justify-center items-center w-6 h-6 gap-1"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>
            {/* Mobile dropdown menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-md ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col px-[5%] py-2">
                    <a onClick={handleMenuItemClick} href="#hero" className="py-3 border-b border-gray-100">Home</a>
                    <a onClick={handleMenuItemClick} href="#about" className="py-3 border-b border-gray-100">About</a>
                    <a onClick={handleMenuItemClick} href="#projects" className="py-3 border-b border-gray-100">Projects</a>
                    <a onClick={handleMenuItemClick} href="#workexperiences" className="py-3">Experience</a>
                </div>
            </div>
            <div className="progress-container w-full h-1 bg-[#f3f3f3]" >
                <div
                    className="progress-bar h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${scrollPosition}%` }}
                />
            </div>
        </div>
    )
}

export default Navigation;