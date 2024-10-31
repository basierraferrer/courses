import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { IoMdMenu } from 'react-icons/io'
import { IoBarChart, IoSearch, IoSearchCircleOutline } from 'react-icons/io5'

export const TopMenu = () => {

    const cookieStore = cookies();
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');

    const getTotalCount = () => {
        let items = 0;
        Object.values(cart).forEach(value => {
            items += value as number;
        });
        return items
    }

    return (
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">

            <div className="px-6 flex items-center justify-between space-x-4">
                <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                    <IoMdMenu />
                </button>
                <div className="flex space-x-2">

                    <div hidden className="md:block">
                        <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                            <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                <IoSearch />
                            </span>
                            <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                        </div>
                    </div>

                    <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                        <IoSearchCircleOutline />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                        <IoBarChart size={25} />
                    </button>
                    <Link href='/dashboard/cart' className="p-2 flex items-center justify-center  h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                        {getTotalCount() > 0 && <span className='text-sm mr-1 font-bold text-red-500'>{getTotalCount()}</span>}
                        <CiShoppingBasket size={25} />
                    </Link>
                </div>
            </div>
        </div>
    )
}