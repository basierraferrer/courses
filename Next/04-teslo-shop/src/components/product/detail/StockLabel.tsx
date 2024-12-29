'use client'
import { getStockBySlug } from '@/actions';
import { titleFont } from '@/config/fonts';
import React, { useEffect, useState } from 'react';

interface Props {
    slug: string
}

export const StockLabel = ({ slug }: Props) => {
    const [stock, setStock] = useState<number | null>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStock();
    }, []);

    const getStock = async () => {
        setIsLoading(true);
        const inStock = await getStockBySlug(slug);
        setStock(inStock);
        setIsLoading(false);
    }



    return isLoading ? (
        <h1 className={`${titleFont.className} antialiased font-bold text-lg bg-gray-400 animate-pulse`}>
            &nbsp;
        </h1>
    ) : (
        <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
            Stock: {stock ?? 0}
        </h1>
    )
}
