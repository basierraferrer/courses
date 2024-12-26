import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/" className="mx-3">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo
        </span>
        <span> | shop</span>
        <span> &#169; {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3 underline">
        <span>Privacidad & legal</span>
      </Link>

      <Link href="/" className="mx-3 underline">
        <span>Ubicaciones</span>
      </Link>
    </div>
  );
};
