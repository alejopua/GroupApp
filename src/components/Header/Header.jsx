import './Header.css'
import headerImg from '../../../public/img/GroupApp.png'

export function Header() {
    return (
        <>
            <header className="header">
                <img src={headerImg} alt="header group app" />
            </header>
        </>
    )
}
