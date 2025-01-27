import { CartProduct } from '@/interfaces'
import { currencyFormat } from '@/utils'
import Image from 'next/image'
import React from 'react'

interface Props {
  products?: CartProduct[]
}

export const Items = ({ products }: Props) => {
  return (
    <div className='mt-5'>
      {products?.map(product => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            style={{
              width: '100px',
              height: '100px',
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <span>
              {product.size} - {product.title} ({product.quantity})
            </span>

            <p className="font-bold">
              {currencyFormat(product.price * product.quantity)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
