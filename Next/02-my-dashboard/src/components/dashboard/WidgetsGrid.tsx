'use client';

import React from 'react'
import { IoCafeOutline, IoAirplaneSharp } from 'react-icons/io5'
import { useAppSelector } from '@/store'
import { SimpleWidget } from '@/components'
import { DASHBOARD_ROUTES } from '@/utils';

export const WidgetsGrid = () => {
    const counter = useAppSelector(state => state.counter.count);
    return (
        <div className="flex flex-wrap justify-center">
            <SimpleWidget
                label='Contador'
                icon={<IoCafeOutline className='text-blue-400' size={50} />}
                href={DASHBOARD_ROUTES.COUNTER}
                title={counter.toString()}
                subtitle='Productos seleccionados'
            />

            <SimpleWidget
                label='Contador'
                icon={<IoAirplaneSharp className='text-blue-400' size={50} />}
                href={DASHBOARD_ROUTES.COUNTER}
                title={counter.toString()}
                subtitle='Productos seleccionados'
            />

        </div>
    )
}
