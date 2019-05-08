import React from "react";

const Footer = () => {
    return (
        <footer className='page-footer font-small mt-5'>
            <div className="footer-copyright text-center text-white py-3" >
                <span style={{ opacity: '0.5' }}>&copy; {new Date().getFullYear()} Copyright</span><span> PROJECT-X</span>
            </div>
        </footer>
    )
}

export default Footer;
