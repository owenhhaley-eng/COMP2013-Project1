import type { ItemsContainerProps } from "./ThriftHappensApp";
import ItemCard from "./ItemCard";

export default function ItemsContainer({
  data,
  productInfo,
  handleChangeQuantity,
  handleAddToCheckout,
}: ItemsContainerProps) {
  return (
    <div className="ProductContainer">
      {data.map((item) => {
        const info = productInfo.find(
          (information) => information.id === item.id,
        );
        //if the data does not exist in product info return null
        if (!info) return null;
        //else return the Product Card with all the info
        return (
          <ItemCard
            key={item.id}
            {...item}
            productInfo={info}
            handleChangeQuantity={(delta: number) =>
              handleChangeQuantity(item.id, delta, item.quantity)
            }
            handleAddToCheckout={handleAddToCheckout}
          />
        );
      })}
    </div>
  );
}
