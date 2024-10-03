'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initState, subtractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface ICartCounterProps {
    value?: number
}

interface ICounterResponse {
    count: number;
}

const getApiCounter = async (): Promise<ICounterResponse> => {
    const data = await fetch('/api/counter').then(res => res.json())
    console.log("**__** ~ getApiCounter ~ data:", data)
    return data;
}

export const CartCounter = ({ value = 0 }: ICartCounterProps) => {
    const counter = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    const increment = () => {
        dispatch(addOne());
    }
    const decrement = () => {
        dispatch(subtractOne());
    }

    useEffect(() => {
        getApiCounter().then(data => dispatch(initState(data.count)))
    }, [dispatch, value])

    return (
        <div className="flex flex-col items-center justify-center">
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={decrement}
                >-1</button>
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={increment}
                >+1</button>
            </div>
        </div>
    )
}