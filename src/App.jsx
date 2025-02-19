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

    const dropdownOptions = [{text : "iedere week", value : "weekly"}, {text: "om de week", value : "biweekly"}, {text : "iedere maand", value : "monthly"}];
    const radioButtonOptions = [{text : "Overdag", value : "dag"}, { text : "in de avond", value: "avond"}];

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

    function printFormInput() {
        console.log("Good so far~`");
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
                        fieldText="firstName"
                        inputType="text"
                    />
                    <FormField
                        fieldName="lastName"
                        fieldText="lastName"
                        inputType="text"
                    />
                    <FormField
                        fieldName="age"
                        fieldText="age"
                        inputType="text"
                        presetValue={0}
                    />
                    <FormField
                        fieldName="zipCode"
                        fieldText="zipCode"
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
                    <FormField
                        fieldName="opmerking"
                        inputType="textarea"
                    />
                    <FormField
                        fieldName="voorwaarden"
                        fieldText="ik ga akkoord met de voorwaarden"
                        inputType="checkbox"
                    />
                    <FormField
                        fieldName="verzend"
                        fieldText="verzend"
                        inputType="submit"
                        btnFunction={printFormInput}
                    />
                </form>
            </div>
        </>
    )
}

export default App
