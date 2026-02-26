


const Footer = () => {
    return (
        <footer className="footer w-screen flex flex-col items-center justify-center gap-4 p-4 bg-white border-t border-gray-400">
            <div className="flex">
                <a href='https://github.com/wskas'><img className='w-8' src='github-icon.svg'/></a>
                <a href='https://www.linkedin.com/in/winson-sutanto-kasman/' className="ml-4"><img className='w-8' src='linkedin-icon.svg'/></a>
                <a href='mailto:winsonsutantokasman@gmail.com' className="ml-4"><img className='w-8' src='mailto.svg'/></a>
            </div>
            <p className="text-xs">© 2025 Winson Kasman</p>
        </footer>
    );
}

export default Footer;