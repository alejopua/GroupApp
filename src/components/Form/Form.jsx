import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { ButtonForm } from '../ButtonForm/ButtonForm'
import { DataList } from '../DataList/DataList'
import { Field } from '../Field/Field'
import './Form.css'

export function Form(props) {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')

    const [titleTeam, setTitleTeam] = useState('')
    const [color, setColor] = useState('')

    const fields = [
        {
            name: 'Nombre',
            placeholder: 'Nombre...',
            required: true,
            capture: name,
            setCapture: setName
        },
        {
            name: 'Puesto',
            placeholder: 'Puesto...',
            required: true,
            capture: position,
            setCapture: setPosition
        },
        {
            name: 'Foto',
            placeholder: 'enlace de foto...',
            required: true,
            capture: photo,
            setCapture: setPhoto
        }
    ]

    const fieldsTeam = [
        {
            nameAtributo: 'Nombre',
            placeholder: 'Nombre del equipo...',
            required: true,
            capture: titleTeam,
            setCapture: setTitleTeam
        }, 
        {
            nameAtributo: 'Color',
            placeholder: 'el color en HEX...',
            required: true,
            capture: color,
            setCapture: setColor,
            type: 'color'
        }
    ]

    const runEvent = (e) => {
        e.preventDefault()
        let sendData = {
            id: uuid(),
            name: name,
            position: position,
            photo: photo,
            team: team
        }
        props.logPartner(sendData)
    }

    const runNewEvent = (e) => {
        e.preventDefault()
        props.logTeam(
            {
                id: uuid(),
                Titulo: titleTeam,
                highlights: color
            }
        )
    }

    return (
        <section className='content-fm'>
            <form className='fm' onSubmit={runEvent}>
                <h2 className='fm-subtitle'>Crear colaborador.</h2>
                {
                    fields.map(({name, placeholder, required, capture, setCapture, type}) => (
                        <Field
                            key={name}
                            name={name}
                            placeholder={placeholder}
                            required={required}
                            capture={capture}
                            setCapture={setCapture}
                            type={type}
                        ></Field>
                    ))
                }
                <DataList capture={team} setCapture={setTeam} teams={props.teams}/>
                <ButtonForm text='Crear colaborador' />
            </form>
            <form className='fm-team' onSubmit={runNewEvent}>
                <h2 className='fm-subtitle'>Crear equipo.</h2>
                {
                    fieldsTeam.map(({nameAtributo, placeholder, required, capture, setCapture, type}) => (
                        <Field
                            key={nameAtributo}
                            name={nameAtributo}
                            placeholder={placeholder}
                            required={required}
                            capture={capture}
                            setCapture={setCapture}
                            type={type}
                        ></Field>
                    ))
                }
                <ButtonForm text='Crear Equipo' />
            </form>
        </section>
    )
}
