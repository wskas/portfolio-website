


const Footer = () => {
    return (
        <footer className="footer w-screen flex flex-col items-center justify-center gap-4 p-4 mt-8 border-t border-gray-400">
            <div className="flex">
                <a href='https://github.com/wskas'><img className='w-8' src='github-icon.svg'/></a>
                <a href='https://www.linkedin.com/in/winson-sutanto-kasman/' className="ml-4"><img className='w-8' src='linkedin-icon.svg'/></a>
            </div>
            <p className="text-xs">© 2024 Winson Sutanto</p>
        </footer>
    );
}

export default Footer;