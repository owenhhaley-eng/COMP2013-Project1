import type { ClothingProduct } from "../data/data";
import type { CheckoutItem, ProductInfo } from "./ThriftHappensApp";

interface ProductCardProps extends ClothingProduct {
  productInfo: ProductInfo;
  handleChangeQuantity: (delta: number) => void;
  handleAddToCheckout: (checkoutItem: CheckoutItem) => void;
}

export default function ProductCard({
  productInfo,
  image,
  fit,
  category,
  color,
  description,
  size,
  handleChangeQuantity,
  handleAddToCheckout,
}: ProductCardProps) {
  return (
    <div className="ProductCard">
      <h2>{productInfo.name}</h2>
      <img src={image} alt="" height="100px" />
      <p>Fit: {fit}</p>
      <p>Category: {category}</p>
      <p>Color: {color}</p>
      <p>{description}</p>
      <p>Size: {size}</p>
      <p>Price: {productInfo.price}</p>
      <p>Quantity: {productInfo.quantity}</p>
      <button onClick={() => handleChangeQuantity(-1)}>{" - "}</button>
      <span>{productInfo.itemQuantity}</span>
      <button onClick={() => handleChangeQuantity(1)}>{" + "}</button>
      <br />
      <button
        onClick={() =>
          handleAddToCheckout({
            id: crypto.randomUUID(),
            image,
            name: productInfo.name,
            price: productInfo.price,
            quantity: productInfo.quantity,
            itemQuantity: productInfo.itemQuantity,
            total: productInfo.itemQuantity * productInfo.price,
          })
        }
      >
        Add to Checkout
      </button>
    </div>
  );
}
