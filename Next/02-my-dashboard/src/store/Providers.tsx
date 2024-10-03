'use client';

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '.'

interface IProvidersProps {
    children: React.ReactNode
}

export const Providers = ({ children }: IProvidersProps) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
