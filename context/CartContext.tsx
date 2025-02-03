import { IProductCart } from '@/interfaces/context/cart';
import { ICartContext } from '@/interfaces/context/cart/ICartContext';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

const initialCart: Array<IProductCart> = [];

const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function useCart() {
  const value = useContext(CartContext);

  return value;
}

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState(initialCart);

  // Function to add an item to the cart
  const addToCart = (item: IProductCart) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        // If the item exists, increase its quantity
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i,
        );
      }
      // If the item doesn't exist, add it to the cart
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      // Filter out the item with the given ID
      return prevCart.filter((item) => item.id !== itemId);
    });
  };

  // Function to update the quantity of an item in the cart
  const updateCartItemQuantity = (itemId: string, quantity: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) => (item.id === itemId ? { ...item, quantity } : item));
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
