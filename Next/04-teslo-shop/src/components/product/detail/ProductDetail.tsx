import {SizeSelector, QuantitySelector} from '@/components';
import {titleFont} from '@/config/fonts';
import {Product} from '@/interfaces';
import React from 'react';

interface Props {
  product: Product;
}

export const ProductDetail = ({product}: Props) => {
  return (
    <div className="col-span-1 px-5">
      <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
        {product.title}
      </h1>
      <p className="text-lg mb-5">${product.price}</p>
      {/** Selector de tallas */}
      <SizeSelector
        availableSizes={product.sizes}
        selectedSize={product.sizes[0]}
      />
      {/** Selector de cantidad */}
      <QuantitySelector quantity={2} />
      {/** Button */}
      <button className="btn-primary my-5">Agregar al carrito</button>
      {/** Descripcion */}
      <h3 className="font-bold text-sm">Descripción</h3>
      <p className="font-light">{product.description}</p>
    </div>
  );
};
