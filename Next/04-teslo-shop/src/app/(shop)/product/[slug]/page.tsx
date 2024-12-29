export const revalidate = 604800;

import { ProductDetail, Slideshow, SlideshowMobile } from '@/components';
import { notFound } from 'next/navigation';
import { Product } from '@/interfaces';
import { getProductBySlug } from '@/actions/product/get-by-slug';
import { Metadata, ResolvingMetadata } from 'next';


interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  const previousImages = (await parent).openGraph?.images || [];
  const images = [`http://localhost:3000/products/${product?.images[1]}`, ...previousImages]

  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      images,
    }
  }
}

export default async function NamePage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  product.id = product.slug;

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
      <ProductDetail product={product as Product} />
    </div>
  );
}
