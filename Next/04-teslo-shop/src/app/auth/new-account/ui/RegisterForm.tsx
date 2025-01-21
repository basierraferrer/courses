'use client'
import { login, registerUser } from '@/actions';
import clsx from 'clsx';
import { redirect } from 'next/navigation';
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

type FormInputs = {
    name: string;
    email: string;
    password: string
}

export const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit = async (data: FormInputs) => {
        setErrorMessage('');
        const result = await registerUser(data);
        if (!result.ok) {
            setErrorMessage(result.message);
            return;
        }
        try {
            await login(data.email, data.password);
            redirect('/');
        } catch (error) {
            console.error("**__** ~ onSubmit ~ error:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

            <label htmlFor="name">Nombre completo</label>
            <input
                className={
                    clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
                        'border-red-500': errors.name
                    })
                }
                type="text"
                {...register('name', { required: true })}
            />




            <label htmlFor="email">Correo electrónico</label>
            <input
                className={
                    clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
                        'border-red-500': errors.email
                    })
                }
                type="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />


            <label htmlFor="password">Contraseña</label>
            <input
                className={
                    clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
                        'border-red-500': errors.password
                    })
                }
                type="password"
                {...register('password', { required: true, minLength: 6 })}
            />

            {
                errorMessage && (
                    <p className="text-red-500 m-3">{errorMessage}</p>
                )
            }

            <button className="py-4 btn-primary"> Crear cuenta</button>


            {/* divisor l ine */}
            <div className="flex items-center my-5">
                <div className="flex-1 border-t border-gray-500"></div>
                <div className="px-2 text-gray-800">O</div>
                <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link
                href="/auth/login"
                className="btn-secondary text-center">
                Ingresar
            </Link>

        </form>
    )
}
