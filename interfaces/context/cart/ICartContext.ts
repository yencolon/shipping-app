import { IProductCart } from "./IProductCart";

export interface ICartContext {
  cart: Array<IProductCart>;
  addToCart: (item: IProductCart) => void;
  removeFromCart: (id: string) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void
  getTotal: () => number;
}