import type { ClothingProduct } from "../data/data";
import type { ProductInfo } from "./ThriftHappensApp";

interface ProductCardProps extends ClothingProduct {
  productInfo: ProductInfo;
}

export default function ProductCard({
  productInfo,
  name,
  image,
  fit,
  category,
  color,
  description,
  size,
  price,
}: ProductCardProps) {
  return (
    <div className="ProductCard">
      <h2>{name}</h2>
      <img src={image} alt="" height="100px" />
      <p>Fit: {fit}</p>
      <p>Category: {category}</p>
      <p>Color: {color}</p>
      <p>{description}</p>
      <p>Size: {size}</p>
      <p>Price: {price}</p>
      <p>Quantity: {productInfo.quantity}</p>
      <button>{" - "}</button>
      <span>{productInfo.itemQuantity}</span>
      <button>{" + "}</button>
      <button>Add to Checkout</button>
    </div>
  );
}
