'use client';

import Image from "next/image"
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5"
import { Star } from "./Star";
import { addProductCart, deleteProduct } from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";

interface IProductProps {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
}

export const ProductCard = ({ image, name, price, rating, id }: IProductProps) => {

    const router = useRouter();

    const onAddCart = () => {
        addProductCart(id);
        router.refresh();
    }

    const onDeleteItem = () => {
        deleteProduct(id);
        router.refresh();
    }

    return (
        <div className="shadow rounded-lg max-w-sm bg-gray-800 border-gray-100">

            {/* Product Image */}
            <div className="p-2">
                <Image
                    width={500}
                    height={500}
                    className="rounded"
                    src={image}
                    alt="product image" />
            </div>

            {/* Title */}
            <div className="px-5 pb-5">
                <a href="#">
                    <h3 className="font-semibold text-xl tracking-tight text-white">{name}</h3>
                </a>
                <div className="flex items-center mt-2.5 mb-5">


                    {/* Stars */}
                    {
                        Array.from({ length: rating }).map((_, index) => (
                            <Star key={index.toString()} />
                        ))
                    }



                    {/* Rating Number */}
                    <span className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                        {rating.toFixed(1)}
                    </span>
                </div>


                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">{'$ ' + price}</span>

                    <div className="flex">
                        <button onClick={onAddCart}
                            className="text-white mr-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            <IoAddCircleOutline size={25} />
                        </button>
                        <button
                            onClick={onDeleteItem}
                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            <IoTrashOutline size={20} />
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}