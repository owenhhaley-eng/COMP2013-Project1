import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import CheckoutContainer from "./CheckoutContainer";

//////////////Interfaces
interface ItemData {
  data: ClothingProduct[];
}

//This interface is responsible for the productInfo state
export interface ProductInfo {
  id: number;
  quantity: number;
  itemQuantity: number;
}

export interface ItemsContainerProps {
  data: ClothingProduct[];
  productInfo: ProductInfo[];
  handleChangeQuantity: (id: number, delta: number) => void;
}

/// I'll need a CheckoutItem interface later on

export interface CheckoutItem {
  id: string;
  image: string;
  title: string;
  price: number;
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
      quantity: item.quantity,
      itemQuantity: item.itemQuantity,
    })),
  );

  ///Checkout Items state
  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);

  ///Handlers
  function handleChangeQuantity(id: number, delta: number) {
    setProductInfo((prevData) => {
      return prevData.map((info) =>
        info.id === id
          ? { ...info, itemQuantity: Math.max(info.itemQuantity + delta, 0) }
          : info,
      );
    });
  }

  function handleRemoveOneFromCheckout(id: string) {
    setCheckoutItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  //Main return
  return (
    <div>
      <ItemsContainer
        data={data}
        productInfo={productInfo}
        handleChangeQuantity={handleChangeQuantity}
      />
      <CheckoutContainer
        checkoutData={checkoutItems}
        handleRemoveOneFromCheckout={handleRemoveOneFromCheckout}
      />
    </div>
  );
}
