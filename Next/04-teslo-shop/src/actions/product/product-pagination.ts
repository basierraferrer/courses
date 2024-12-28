'use server';

import prisma from '@/lib/prisma';
import {Gender} from '@prisma/client';

interface Pagination {
  page?: number;
  take?: number;
  gender?: Gender;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  gender,
}: Pagination) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const query = {
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender: gender,
      },
    };
    // 1. Get data
    const [products, totalCount] = await Promise.all([
      prisma.product.findMany(query),
      prisma.product.count({
        where: {
          gender: gender,
        },
      }),
    ]);

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map(item => ({
        ...item,
        images: item.ProductImage.map(image => image.url),
      })),
    };
  } catch (error) {
    throw new Error('No se pudo cargar productos', error as unknown as Error);
  }
};
