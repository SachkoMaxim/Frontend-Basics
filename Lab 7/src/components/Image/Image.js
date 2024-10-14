import city from "../../assets/images/Uzhgorod.jpg";
import Button from "../Button/Button";
import './Image.css';

function Image({ img, increaseSize, decreaseSize, removeImage }) {
    return (
        <div>
            <a href="https://www.0312.ua/ " target="_blank" rel="noopener noreferrer">
                <img
                    className="image-element"
                    src={city}
                    width={img.size}
                    alt="Йой, щось пішло не так..." />
            </a>
            <div className="button-panel">
                <Button onClick={() => increaseSize(img.id)}>Збільшити зображення</Button>
                <Button onClick={() => decreaseSize(img.id)}>Зменшити зображення</Button>
                <Button onClick={() => removeImage(img.id)}>Видалити зображення</Button>
            </div>
        </div>
    );
}

export default Image;