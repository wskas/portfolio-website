import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';

const Navigation = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

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
                <a onClick={handleClick} href="#hero" className="ml-5">Home</a>
                <a onClick={handleClick} href="#about" className="ml-5">About</a>
                <a onClick={handleClick} href="#projects" className="ml-5">Projects</a>
                <a onClick={handleClick} href="#workexperiences" className="ml-5">Experience</a>
                <a onClick={handleClick} href="#contactme" className="ml-5">Contact</a>
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