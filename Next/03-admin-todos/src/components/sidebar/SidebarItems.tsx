'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItems {
    icon: React.JSX.Element;
    iconActive: React.JSX.Element;
    title: string;
    path: string;
}



export const SidebarItems = ({ path, icon, iconActive, title }: SidebarItems) => {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <li key={path}>
            <Link
                href={path}
                className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600
                    hover:bg-gradient-to-r hover:bg-sky-500 hover:text-white
                    ${isActive ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}`}
            >
                {isActive ? iconActive : icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}
