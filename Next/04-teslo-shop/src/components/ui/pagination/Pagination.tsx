'use client';
import Link from 'next/link';
import React from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { generatePagination } from '@/utils/generatePaginationNumber';

interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
    const pathname = usePathname();
    const searchParam = useSearchParams();
    const pageString = searchParam.get('page') ?? 1;
    const currentPage = isNaN(+pageString) ? 1 : +pageString;
    const gender = searchParam.get('gender');

    const allPages = generatePagination(currentPage, totalPages);

    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParam);

        if (pageNumber === '...') {
            return `${pathname}?${params.toString()}`;
        }

        if (+pageNumber === 0) {
            return `${pathname}`;
        }

        if (+pageNumber > totalPages) {
            return `${pathname}?${params.toString()}`;
        }

        params.set('page', pageNumber.toString());
        if (gender) {
            params.set('gender', gender);
        }

        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="flex justify-center mb-10 mt-10">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    <li className="page-item disabled">
                        <Link
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage - 1)}>
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    {allPages.map((value, index) => (
                        <li
                            className={clsx('page-item', {
                                active: currentPage === value,
                            })}
                            key={`page-${index}`}>
                            <Link
                                className={clsx(
                                    'page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-blue-400 focus:shadow-none',
                                    {
                                        'bg-blue-700': currentPage === value,
                                        'bg-transparent': currentPage !== value,
                                    },
                                )}
                                href={createPageUrl(value)}>
                                {value}
                            </Link>
                        </li>
                    ))}


                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage + 1)}>
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
