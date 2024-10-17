import './GoodsCard.css';

function GoodsCard({ image, title, price }) {
    return (
        <div className="goods-card">
            <img src={image} alt={title} className="goods-image" />
            <h3 className="goods-title">{title}</h3>
            <p className="goods-price">Ціна: {price}$ USD</p>
        </div>
    );
}

export default GoodsCard;