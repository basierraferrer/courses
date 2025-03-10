/**
 * cookie: cart
 * {
 *  'uui-123-1': 4,
 * }
 */

import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = ():{ [id:string] :number } =>{
    if( hasCookie('cart')){
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
        return cookieCart;
    }
    return {}
}

export const addProductCart = (id:string)=>{
    const cookieCart = getCookieCart();

    if(cookieCart[id]){
        cookieCart[id] += 1;
    }else{
        cookieCart[id] = 1;
    }

    setCookie('cart', JSON.stringify(cookieCart));
}

export const deleteProduct = (id:string)=>{
    const cookieCart = getCookieCart();

    delete cookieCart[id];
   
    setCookie('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = (id:string)=>{
    const cookieCart = getCookieCart();

    if(cookieCart[id] > 1){
        cookieCart[id] -= 1;
    } else {
        delete cookieCart[id];
    }
   
    setCookie('cart', JSON.stringify(cookieCart));
}