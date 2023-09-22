import './Field.css'

export function Field(props) {
    const { type = 'text'} = props
    const valueCaptured = (e) => {
        props.setCapture(e.target.value)
    }

    return (
        <>
            <label className='fm-field-label' htmlFor='name'>{props.name}</label>
            <input className={`fm-field-input type-${type}`} type={type} id='name' name='name' placeholder={`Ingresar ${props.placeholder}`} required={props.required} value={props.capture} onChange={valueCaptured} />
        </>
    )
}
