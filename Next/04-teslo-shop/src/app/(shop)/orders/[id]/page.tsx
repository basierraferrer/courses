import {Title} from '@/components';
import {initialData} from '@/seed/seed';
import clsx from 'clsx';
import Image from 'next/image';
import {IoCardOutline} from 'react-icons/io5';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({params}: Props) {
  const {id} = await params;
  // Todo: verificar id

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/** Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
                {
                  //"bg-red-500": true,
                  'bg-green-600': true,
                },
              )}>
              <IoCardOutline size={30} />
              {/*<span className="mx-2">Pendiente de pago</span>*/}
              <span className="mx-2">Pagada</span>
            </div>

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
              <div
                className={clsx(
                  'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
                  {
                    //"bg-red-500": true,
                    'bg-green-600': true,
                  },
                )}>
                <IoCardOutline size={30} />
                {/*<span className="mx-2">Pendiente de pago</span>*/}
                <span className="mx-2">Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
