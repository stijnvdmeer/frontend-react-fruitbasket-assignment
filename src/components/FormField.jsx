/* eslint-disable react/prop-types */
import '../styles/formfield.css';

export default function FormField({fieldName, presetValue, inputType, options}) {

    if(inputType === "text") {
        // Text Input Field
        return (
            <div className="textField">
                <h2><label htmlFor={fieldName}>{fieldName + ":"}</label></h2>
                <input type={inputType} id={fieldName} value={presetValue} />
            </div>
        )
    } else if (inputType === "textarea") {
        // Textarea input field
        return (
            <div className="textareaField">
                <h2><label htmlFor={fieldName}>{fieldName + ":"}</label></h2>
                <input type={inputType} id={fieldName} value={presetValue}/>
            </div>
        )
    } else if (inputType === "dropdown") {
        // Dropdown Input Field
        return (
            <div className="dropdownField">
                <h2><label htmlFor={fieldName}>{fieldName}</label></h2>
                <select id={fieldName}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        )
    } else if (inputType === "checkbox") {
        // Checkbox Input Field
        return (
            <div className="checkboxField">
                <h2><label htmlFor={fieldName}>{fieldName}</label></h2>
                <input type={inputType} id={fieldName} value={presetValue}/>
            </div>
        )
    } else if (inputType === "radio") {
        return (
            <div className="radioField">
                {
                    options.map((option) => (
                        <>
                            <input type="radio" id={option} name={fieldName} value={option}/>
                            <h2><label htmlFor={option}>{option}</label></h2>
                        </>
                    ))
                }
            </div>
        )
    }

}