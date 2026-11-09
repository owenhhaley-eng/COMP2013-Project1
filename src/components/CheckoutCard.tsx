import type { CheckoutItem } from "./ThriftHappensApp";

interface CheckoutCardProps extends CheckoutItem {
  handleRemoveOneFromCheckout: (
    id: string,
    productID: number,
    itemQuantity: number,
  ) => void;
}

export default function CheckoutCard({
  id,
  productID,
  image,
  name,
  price,
  itemQuantity,
  total,
  handleRemoveOneFromCheckout,
}: CheckoutCardProps) {
  return (
    <div className="CheckoutCard">
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p>Price: {price.toFixed(2)}$</p>
      <p>Quantity: {itemQuantity}</p>
      <p>Total: {total.toFixed(2)}$</p>
      <button
        onClick={() => handleRemoveOneFromCheckout(id, productID, itemQuantity)}
      >
        Remove
      </button>
    </div>
  );
}
