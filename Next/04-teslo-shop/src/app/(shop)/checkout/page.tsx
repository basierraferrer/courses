import { Title } from '@/components';
import { initialData } from '@/seed/seed';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Productos en el carrito',
};

export default function Page() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar Orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/** Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar orden</span>
            <Link href="/" className="underline mb-5">
              Editar orden
            </Link>

            {/** Items */}
            {productsInCart.map(item => (
              <div className="flex mb-5" key={item.slug}>
                <Image
                  alt={item.title}
                  src={`/products/${item.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{item.title}</p>
                  <p>${item.price} x 3</p>
                  <p className="font-semibold">Subtotal: ${item.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/** Checkout - summary */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>

            <div className="mb-10">
              <p>Brian Sierra</p>
              <p>Av. Siempre viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldía Dosquebradas</p>
              <p>Dosquebradas, Risaralda</p>
              <p>CP 123123</p>
              <p>123.123.123</p>
            </div>

            {/** divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

            <h2 className="text-2xl mb-2">Resumen orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                <span>
                  Al hacer click en &quot;Colocar orden&quot;, aceptas nuestros{' '}
                  <a href="#" className="underline">
                    términos y condiciones
                  </a>{' '}
                  y{' '}
                  <a href="#" className="underline">
                    política de privacidad
                  </a>
                </span>
              </p>
              <Link
                href="/orders/123"
                className="flex mt-5 btn-primary justify-center">
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
