import { CartCounter } from "@/modules/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping cart",
  description: "Carrito de compras",
};



export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}