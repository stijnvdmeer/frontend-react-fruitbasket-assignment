/* eslint-disable no-unused-vars */
// Stylesheet Imports
import './styles/App.css';

// Image Imports
import appleIcon from './assets/apple.png';
import bananaIcon from './assets/banana.jpg';
import kiwiIcon from './assets/kiwi.jpg';
import strawberryIcon from './assets/strawberry.jpg';

// Component Imports
import FruitOverview from "./components/FruitOverview.jsx";
import {useState} from "react";
import FormField from "./components/FormField.jsx";



function App() {
    // UseStates
    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const[kiwiCount, setKiwiCount] = useState(0);

    const dropdownOptions = ["iedere week", "om de week", "iedere maand"];
    const radioButtonOptions = ["Overdag", "in de avond"];

    const changeStrawberryCount = (operator) => {
        if(operator === "remove" && strawberryCount === 0) return;
        operator === "add" ? setStrawberryCount(strawberryCount + 1) : setStrawberryCount(strawberryCount - 1);
    }

    const changeBananaCount = (operator) => {
        if(operator === "remove" && strawberryCount === 0) return;
        operator === "add" ? setBananaCount(bananaCount + 1) : setBananaCount(strawberryCount - 1);
    }

    const changeAppleCount = (operator) => {
        if(operator === "remove" && strawberryCount === 0) return;
        operator === "add" ? setAppleCount(appleCount + 1) : setAppleCount(appleCount - 1);
    }

    const changeKiwiCount = (operator) => {
        if(operator === "remove" && strawberryCount === 0) return;
        operator === "add" ? setKiwiCount(kiwiCount + 1) : setKiwiCount(kiwiCount - 1);
    }
    const resetCounts = () => {
        setStrawberryCount(0);
        setBananaCount(0);
        setAppleCount(0);
        setKiwiCount(0);

    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitOverview
                imgSrc={strawberryIcon}
                imgAlt="aarbei"
                text="Aarbeien"
                itemCount={strawberryCount}
                btnFunction={changeStrawberryCount}
            />
            <FruitOverview
                imgSrc={bananaIcon}
                imgAlt="banaan"
                text="Bananan"
                itemCount={bananaCount}
                btnFunction={changeBananaCount}
            />
            <FruitOverview
                imgSrc={appleIcon}
                imgAlt="appel"
                text="appels"
                itemCount={appleCount}
                btnFunction={changeAppleCount}
            />
            <FruitOverview
                imgSrc={kiwiIcon}
                imgAlt="kiwi"
                text="Kiwi's"
                itemCount={kiwiCount}
                btnFunction={changeKiwiCount}
            />
            <button onClick={resetCounts}>Reset</button>
            <div className="form-outer">
                <form className="form-inner">
                    <FormField
                        fieldName="firstName"
                        inputType="text"
                    />
                    <FormField
                        fieldName="lastName"
                        inputType="text"
                    />
                    <FormField
                        fieldName="age"
                        inputType="text"
                        presetValue={0}
                    />
                    <FormField
                        fieldName="zipCode"
                        inputType="text"
                    />
                    <FormField
                        fieldName="bezorgfrequentie"
                        inputType="dropdown"
                        options={dropdownOptions}
                    />
                    <FormField
                        fieldName="tijdslot"
                        inputType="radio"
                        options={radioButtonOptions}
                    />
                </form>
            </div>
        </>
    )
}

export default App
