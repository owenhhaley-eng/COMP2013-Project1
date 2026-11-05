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
