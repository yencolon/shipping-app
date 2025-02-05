import { IProduct } from "@/interfaces/rest/IProduct";

export interface IProductCart {
  product: IProduct;
  quantity: number;
}