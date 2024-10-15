import { cookies } from 'next/headers';
import { ItemCard } from '@/shopping-cart';
import { Product, productsMock } from '@/products';
import { WidgetItem } from '@/components';

export const metadata = {
    title: 'Cart',
    description: 'Productos en el carrito',
};

interface IProductInCart {
    product: Product,
    quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }) => {
    const productsInCart: IProductInCart[] = [];
    for (const id of Object.keys(cart)) {
        const product = productsMock.find((produ) => produ.id === id);
        if (product) {
            productsInCart.push({ product, quantity: cart[id] });
        }
    }
    return productsInCart;
}

export default function CartPage() {
    const cookieStore = cookies();
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');
    const itemsCart = getProductsInCart(cart);

    const totalToPay = itemsCart.reduce((prev, current) => ((current.product.price * current.quantity) + prev), 0);

    return (
        <div className="w-full bg-white p-2">
            <h1 className="text-5xl">Productos en el carrito</h1>
            <hr className="mb-2" />
            <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {itemsCart.map(item => <ItemCard key={item.product.id} {...item} />)}
                </div>

                <div className="flex flex-col w-full sm:w-4/12">
                    <WidgetItem title='Total a pagar'>
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className='text-3xl font-bold text-gray-700'>${totalToPay.toFixed(2)}</h3>
                        </div>
                        <span className='text-xs text-center font-bold text-gray-500'>Impuestos 15%: ${(totalToPay * 0.15).toFixed(2)} </span>
                    </WidgetItem>
                </div>
            </div>
        </div>
    );
}