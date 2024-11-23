import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <main>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      ></Title>

      <ProductGrid products={products} />
    </main>
  );
}
