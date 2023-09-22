import './Footer.css'

export function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer-social'>
                    <a className='link' href="https://www.linkedin.com/in/alejopua/" target="_blank" rel="noopener noreferrer">
                        <img className='logo-linkedin' src="../../../public/img/linkedin-logo-24.png" alt="Linkedin"/>
                    </a>
                    <a className='link' href="https://www.instagram.com/alejopuar" target="_blank" rel="noopener noreferrer">
                        <img className='logo-instagram' src="../../../public/img/instagram-logo-24.png" alt="Instagram"/>
                    </a>
                    <a className='link' href="https://twitter.com/alejopua" target="_blank" rel="noopener noreferrer">
                        <img className='logo-x' src="../../../public/img/X.png" alt="X by Twitter"/>
                    </a>
                </div>
                <div className='container-logo'>
                    <img className='img-logo' src="../../../public/img/logoVector.png" alt="LogoApp" />
                    <p className='logo-title'>GroupApp</p>
                </div>
                <strong className='footer-info'>Developed by alejopua</strong>
            </footer>
        </>
    )
}
