/* eslint-disable react/prop-types */
import '../styles/formfield.css';

export default function FormField({fieldName, presetValue, inputType}) {
    return (
        <div className="field">
            <label htmlFor={fieldName}>{fieldName + ":"}</label>
            <input type={inputType} id={fieldName} value={presetValue} />
        </div>
    )
}