import './MiOrg.css'

export const MiOrg = ({showHide}) => {
    return (
        <section className='miorg-content'>
            <h3 className='miorg-title'>Mi Organización</h3>
            <img className='miorg-img' src="/public/img/add.png" alt="add" onClick={showHide}/>
        </section>
    )
}

