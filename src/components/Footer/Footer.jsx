import './Footer.css'
import linkedinIcon from '../../../public/img/linkedinIcon.png'
import instagramIcon from '../../../public/img/instagramIcon.png'
import XIcon from '../../../public/img/XIcon.png'
import logoIcon from '../../../public/img/logoIcon.png'

export function Footer() {
    // document.getElementsByClassName('linkedinIcon').src = linkedinImg
    
    return (
        <>
            <footer className='footer'>
                <div className='footer-social'>
                    <a className='link' href="https://www.linkedin.com/in/alejopua/" target="_blank" rel="noopener noreferrer">
                        <img className='linkedinIcon' src={linkedinIcon} alt="Linkedin"/>
                    </a>
                    <a className='link' href="https://www.instagram.com/alejopuar" target="_blank" rel="noopener noreferrer">
                        <img className='logo-instagram' src={instagramIcon} alt="Instagram"/>
                    </a>
                    <a className='link' href="https://twitter.com/alejopua" target="_blank" rel="noopener noreferrer">
                        <img className='logo-x' src={XIcon} alt="X by Twitter"/>
                    </a>
                </div>
                <div className='container-logo'>
                    <img className='img-logo' src={logoIcon} alt="LogoApp" />
                    <p className='logo-title'>GroupApp</p>
                </div>
                <strong className='footer-info'>Developed by alejopua</strong>
            </footer>
        </>
    )
}
