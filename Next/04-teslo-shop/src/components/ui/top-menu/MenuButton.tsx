"use client";
import { useUIStore } from "@/store";
import React from "react";

export const MenuButton = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <button
      className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
      onClick={openMenu}
    >
      Menu
    </button>
  );
};
