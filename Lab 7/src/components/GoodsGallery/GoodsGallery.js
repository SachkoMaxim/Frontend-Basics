import GoodsCard from "../GoodsCard/GoodsCard";
import './GoodsGallery.css';
import { products } from "../data";

function GoodsGallery() {
    return (
        <div className="gallery">
            {products.map((product) => (
                <GoodsCard 
                    key={product.title}
                    {... product}
                />
            ))}
        </div>

    );
  }

export default GoodsGallery;