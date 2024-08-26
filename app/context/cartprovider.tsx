import { FC, PropsWithChildren, useState, useEffect } from "react";
import { CartContext } from "./cartcontext";
import { CartItem } from "@/types/carttypes";
import { MockProductData } from "../mockdata/mock";

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const addItemtoCart = (productId: string) => {
    const product = MockProductData.find((item) => item.id === productId);

    if (!product) {
      console.error("Product not found");
      return;
    }

    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.productId === productId);
      if (itemExists) {
        return prevItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, productId, quantity: 1 }];
      }
    });
  };

  const updateItemInCart = (productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
    });
  };

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        addItemtoCart,
        updateItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
