'use server';
import prisma from '@/lib/prisma';
import {sleep} from '@/utils';

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
      },
    });

    if (!product) return null;

    return {
      ...product,
      images: product.ProductImage.map(image => image.url),
    };
  } catch (error) {
    console.error('Error getting product by slug', error);
    throw new Error('Error getting product by slug');
  }
};

export const getStockBySlug = async (slug: string) => {
  sleep(3);
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
      select: {inStock: true},
    });

    if (!product) return null;

    return product.inStock;
  } catch (error) {
    console.error('Error getting stock product by slug', error);
    throw new Error('Error getting stock product by slug');
  }
};
