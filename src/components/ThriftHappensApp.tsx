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
}

/// I'll need a CheckoutItem interface later on

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

  ///Handlers

  return (
    <div>
      <ItemsContainer data={data} productInfo={productInfo} />
      <CheckoutContainer />
    </div>
  );
}
