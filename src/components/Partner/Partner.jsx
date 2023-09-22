import './Partner.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart  } from 'react-icons/ai'

export function Partner(props) {
    const { colorRamdon, deletePartner, likeState } = props
    const { name, position, photo, team, id, like } = props.ContainerPartners

    return (
        <>
            <div className='cont-card' style={{background: `linear-gradient(${colorRamdon} 35%, white 35%)`}}>
                {like ? <AiFillHeart className='likeIcon' onClick={() => likeState(id)} /> : <AiOutlineHeart className='dislikeIcon' onClick={() => likeState(id)} />}
                <AiFillCloseCircle className='deleteIcon' onClick={ () => (deletePartner(id))} />
                <img className='img-card' src={photo} alt="Img Colaborador" />
                <div>
                    <h3 className='card-title'>{name}</h3>
                    <p className='card-position'>{position}</p>
                </div>
            </div>
        </>
    )
}