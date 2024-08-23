import  { createContext, useContext } from 'react';
import { CartItem } from '@/types/carttypes';



interface cartcontextType{
  cartItems:CartItem[],
  totalAmount:number
  addItemtoCart:(productId:string)=>void
  updateItemInCart:(productId:string,quantity:number)=>void
}

export const CartContext = createContext<cartcontextType>({
  cartItems:[],
  totalAmount:0,
  addItemtoCart:()=>{},
  updateItemInCart:()=>{}
})


export const useCart = ()=>useContext(CartContext);