
import './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} className="productImage" />
      <div className="productInfo">
        <div className="productHeader">
          <h2 className="productName">{product.name}</h2>
          <p className="productPrice">${product.price}</p>
        </div>
        <p className="productDescription">{product.description}</p>
        <div className="productBrands">
          
          
        </div>
      </div>
    </div>
  );
}

