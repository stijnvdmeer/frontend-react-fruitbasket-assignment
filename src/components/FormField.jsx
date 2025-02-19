import '../styles/formfield.css';

export default function FormField({fieldName, presetValue, inputType}) {
    return (
        <>
            <label htmlFor={fieldName}>{fieldName}</label>
            <input type={inputType} id={fieldName} value={presetValue} />
        </>
    )
}