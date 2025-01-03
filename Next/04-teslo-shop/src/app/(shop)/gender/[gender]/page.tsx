export const revalidate = 60;

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';
import { Gender } from '@prisma/client';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    gender: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { gender } = await params;
  const labelByCategory: Record<Gender, string> = {
    kid: 'niños',
    men: 'hombres',
    unisex: 'todos',
    women: 'mujeres',
  };

  return {
    title: 'Category',
    description: `Articulos para ${labelByCategory[gender as Gender]}`,
  }
}

export default async function Page({ params, searchParams }: Props) {
  const { gender } = await params;
  const { page } = await searchParams;
  const currentPage = page ? parseInt(page) : 1;

  const labelByCategory: Record<Gender, string> = {
    kid: 'niños',
    men: 'hombres',
    unisex: 'todos',
    women: 'mujeres',
  };

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page: currentPage,
    gender: gender as Gender,
  });

  return (
    <div>
      <Title
        title={`Articulos para ${labelByCategory[gender as Gender]}`}
        className="mb-2"></Title>

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </div>
  );
}
