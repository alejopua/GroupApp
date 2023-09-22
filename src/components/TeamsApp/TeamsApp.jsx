import { Partner } from '../Partner/Partner'
import hexToRgba from 'hex-to-rgba'
import './TeamsApp.css'

export function TeamsApp(props) {
    const { Titulo, Background, highlights, id } = props.teams
    const { containerPartners, deletePartner, updateColorTeam, likeState } = props

    return (
        <>
            {
                containerPartners.length > 0 
                    ? (
                        <section className='section-cards' style={{backgroundColor: hexToRgba(highlights, 0.6)}}>
                            <input 
                                className='styleColor' 
                                type="color" 
                                value={highlights}
                                onChange={(e) => (
                                    updateColorTeam(e.target.value, id)
                                )}
                            />
                            <h3 className='section-title' style={{borderColor: highlights}}>{Titulo}</h3>
                            <div className='partners'>
                                {containerPartners.map((partner, index) => 
                                    <Partner 
                                        key={index} 
                                        colorRamdon={highlights} 
                                        ContainerPartners={partner}
                                        deletePartner={deletePartner} 
                                        likeState={likeState}
                                    />)}
                            </div>
                        </section>
                    ) 
                    : <></>
            }
        </>
    )
}
