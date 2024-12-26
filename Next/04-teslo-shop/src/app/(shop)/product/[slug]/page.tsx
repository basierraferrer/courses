import { initialData } from "@/seed/seed";
import { ProductDetail, Slideshow, SlideshowMobile } from "@/components";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function NamePage({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/** Slideshow desktop*/}
      <Slideshow
        images={product.images}
        title={product.title}
        className="hidden md:block"
      />
      {/** Slideshow mobile*/}
      <SlideshowMobile
        images={product.images}
        title={product.title}
        className="block md:hidden"
      />
      {/** Details */}
      <ProductDetail product={product} />
    </div>
  );
}
