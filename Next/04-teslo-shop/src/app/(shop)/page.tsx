export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";


interface Props {
  searchParams: Promise<{
    page?: string;
  }>
}

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = page ? parseInt(page) : 1

  const { products, totalPages } = await getPaginatedProductsWithImages({ page: currentPage });

  return (
    <main>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      ></Title>

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </main>
  );
}
