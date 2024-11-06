import GoodsCard from "../components/GoodsCard/GoodsCard";
import { products } from "../data/data";

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