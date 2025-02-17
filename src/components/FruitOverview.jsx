/* eslint-disable */
import '../styles/fruitoverview.css';

export default function FruitOverview({imgSrc, imgAlt, text, itemCount, btnFunction}) {
    return (
        <article className="fruitoverview-outer">
            <div className="fruitoverview-inner">
                <img src={imgSrc} alt={imgAlt} className="fruitoverview-icon"/>
                <span>{text}</span>
                <button onClick={() => btnFunction("add")} value="addOne">+</button>
                <span>{itemCount}</span>
                <button onClick={() => btnFunction("remove")} value="removeOne">-</button>
            </div>
        </article>
    );
}