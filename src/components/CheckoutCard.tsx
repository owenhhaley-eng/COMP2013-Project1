import type { CheckoutItem } from "./ThriftHappensApp";

interface CheckoutCardProps extends CheckoutItem {
  handleRemoveOneFromCheckout: (id: string) => void;
}

export default function CheckoutCard({
  id,
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
      <p>Price: {price.toFixed(2)}</p>
      <p>Quantity: {itemQuantity}</p>
      <p>Total: {total.toFixed(2)}</p>
      <button onClick={() => handleRemoveOneFromCheckout(id)}>Remove</button>
    </div>
  );
}
