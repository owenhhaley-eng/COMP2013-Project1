import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import NavBar from "./NavBar";
import ItemsContainer from "./ItemsContainer";
import CheckoutContainer from "./CheckoutContainer";

//////////////Interfaces
interface ItemData {
  data: ClothingProduct[];
}

//This interface is responsible for the productInfo state
export interface ProductInfo {
  id: number;
  name: string;
  price: number;
  quantity: number;
  itemQuantity: number;
}

export interface ItemsContainerProps {
  data: ClothingProduct[];
  productInfo: ProductInfo[];
  handleChangeQuantity: (id: number, delta: number, quantity: number) => void;
  handleAddToCheckout: (checkoutItem: CheckoutItem) => void;
}

/// I'll need a CheckoutItem interface later on

export interface CheckoutItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  itemQuantity: number;
  total: number;
}

///////////////////Thrift Happens App function

export default function ThriftHappensApp({ data }: ItemData) {
  //states
  //ProductInfo state that stores the quantity and ItemQuantity chosen by the user
  const [productInfo, setProductInfo] = useState<ProductInfo[]>(
    data.map((item: ClothingProduct) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      itemQuantity: item.itemQuantity,
    })),
  );

  ///Checkout Items state
  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);

  ///Handlers
  //To handle the plus and minus buttons
  //send this handler function and ask for the product id, ans delta as arguments
  //check which id is changing, then change the number according to the delta
  //if delta is +1, add to the quantity
  //else if delta is -1, remove from the quantity
  //return the max quantity of 0 or a bigger number;
  //I use Math min to make it so it cannot go over the quantity of that specific item.
  function handleChangeQuantity(id: number, delta: number) {
    setProductInfo((prevData) => {
      return prevData.map((info) =>
        info.id === id
          ? {
              ...info,
              itemQuantity: Math.min(
                Math.max(info.itemQuantity + delta, 0),
                info.quantity,
              ),
            }
          : info,
      );
    });
  }

  //Handler function to add items to the checkout when the user clicks on the button add to checkout
  function handleAddToCheckout(checkoutItem: CheckoutItem) {
    setCheckoutItems((prevItems) => {
      //Check if the item is already in the checkout
      const alreadyInCheckout = prevItems.find(
        (item) => item.id === checkoutItem.id,
      );

      if (alreadyInCheckout) {
        return prevItems.map((item) => {
          if (item.id === checkoutItem.id) {
            return {
              ...item,
              itemQuantity: Math.min(
                item.itemQuantity + checkoutItem.itemQuantity,
                item.quantity,
              ),
            };
          }
          return item;
        });
      }

      //Check if the item being added has a quantity of 0 or lower if it does don't add anything to the checkout
      if (checkoutItem.itemQuantity <= 0) return prevItems;
      return [...prevItems, { ...checkoutItem }];
    });
  }

  function handleEmptyCheckout() {
    setCheckoutItems([]);
  }

  function handleRemoveOneFromCheckout(id: string) {
    setCheckoutItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  //Main return
  return (
    <div>
      <NavBar />
      <ItemsContainer
        data={data}
        productInfo={productInfo}
        handleChangeQuantity={handleChangeQuantity}
        handleAddToCheckout={handleAddToCheckout}
      />
      <CheckoutContainer
        checkoutData={checkoutItems}
        handleEmptyCheckout={handleEmptyCheckout}
        handleRemoveOneFromCheckout={handleRemoveOneFromCheckout}
      />
    </div>
  );
}
