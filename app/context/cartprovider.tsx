import { FC, PropsWithChildren, useState, useEffect } from "react";
import { CartContext } from "./cartcontext";
import { CartItem } from "@/types/carttypes";

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const addItemToCart = async (productId: string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const product = await response.json();

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
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const updateItemInCart = async (productId: string, quantity: number) => {
    try {

      const response = await fetch(`https://fakestoreapi.com/carts/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update item in cart");
      }


      setCartItems((prevItems) => {
        return prevItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity }
            : item
        );
      });
    } catch (error) {
      console.error("Error updating item in cart:", error);
    }
  };

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalAmount(total);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addItemtoCart: addItemToCart, updateItemInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
