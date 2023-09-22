import { useState } from 'react'
import './DataList.css'

export function DataList(props) {
    const [capture, setCapture] = useState('')
    const valueCaptured = (e) => {
        props.setCapture(e.target.value)
    }

    return (
        <>
            <label className='fm-datalist-label' htmlFor='team'>Equipo</label>
            <input className='fm-datalist-input' list='team-group' type='text' id='team' name='team' placeholder='Seleccionar equipo' required value={props.capture} onChange={valueCaptured}/>
            <datalist id='team-group'>
                {props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
            </datalist>
        </>
    )
}
