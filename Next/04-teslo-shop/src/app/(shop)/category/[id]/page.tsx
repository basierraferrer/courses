import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const labelByCategory: Record<Category, string> = {
    kid: "niños",
    men: "hombres",
    unisex: "todos",
    women: "mujeres",
  };

  /*  if (!Object.values(Categories).includes(id as Categories)) {
    notFound();
  } */

  const products = initialData.products.filter((item) => item.gender === id);

  return (
    <div>
      <Title
        title={`Articulos para ${labelByCategory[id]}`}
        className="mb-2"
      ></Title>

      <ProductGrid products={products} />
    </div>
  );
}
