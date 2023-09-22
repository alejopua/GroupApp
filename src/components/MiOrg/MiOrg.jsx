import './MiOrg.css'
import addIcon from '../../../public/img/add.png'

export const MiOrg = ({showHide}) => {
    return (
        <section className='miorg-content'>
            <h3 className='miorg-title'>Mi Organización</h3>
            <img className='miorg-img' src={addIcon} alt="add" onClick={showHide}/>
        </section>
    )
}

