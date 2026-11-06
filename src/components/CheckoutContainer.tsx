import type { CheckoutItem } from "./ThriftHappensApp";
import CheckoutCard from "./CheckoutCard";

interface CheckoutContainerProps {
  checkoutData: CheckoutItem[];
  handleRemoveOneFromCheckout: (id: string) => void;
}

export default function CheckoutContainer({
  checkoutData,
  handleRemoveOneFromCheckout,
}: CheckoutContainerProps) {
  return (
    <div className="CheckoutContainer">
      <div>
        {checkoutData.map((item) => (
          <CheckoutCard
            key={item.id}
            {...item}
            handleRemoveOneFromCheckout={handleRemoveOneFromCheckout}
          />
        ))}
      </div>
      <div>
        <button>Empty Checkout</button>
        <h2>
          {checkoutData.length > 0
            ? `Total: ${checkoutData.reduce((acc, item) => acc + item.total, 0).toFixed(2)}$`
            : `Checkout is Empty`}
        </h2>
      </div>
    </div>
  );
}
