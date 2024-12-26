"use client";
import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveOutline } from "react-icons/io5";

export const ItemSelector = () => {
  const [quantity, setQuantity] = useState(1);

  function onAddToCart() {
    setQuantity((prev) => prev + 1);
  }

  function onRemoveItem() {
    setQuantity((prev) => prev - 1);
  }

  return (
    <div className="flex p-5 items-center justify-center">
      <button
        onClick={onAddToCart}
        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <IoAddCircleOutline size={25} />
      </button>
      <span className="text-2xl text-black mx-10">{quantity}</span>
      <button
        onClick={onRemoveItem}
        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <IoRemoveOutline size={25} />
      </button>
    </div>
  );
};
