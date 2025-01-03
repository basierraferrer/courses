import {titleFont} from '@/config/fonts';
import Link from 'next/link';
import React from 'react';
import {IoCartOutline, IoSearchOutline} from 'react-icons/io5';
import {MenuButton} from './MenuButton';

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/**Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/** Center menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 transition-all hover:bg-gray-100"
          href="/gender/men">
          Hombre
        </Link>
        <Link
          className="m-2 p-2 transition-all hover:bg-gray-100"
          href="/gender/women">
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 transition-all hover:bg-gray-100"
          href="/gender/kid">
          Niños
        </Link>
        <Link
          className="m-2 p-2 transition-all hover:bg-gray-100"
          href="/gender/unisex">
          Unisex
        </Link>
      </div>
      {/** Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <MenuButton />
      </div>
    </nav>
  );
};
