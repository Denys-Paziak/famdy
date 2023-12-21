"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

import "./shopItem.css";

interface Product {
    id: any;
    price: any;
    image: any;
    sale: any;
    name: any;
    size: any;
    quantity: any;
}

interface Props {
    el: any;
}

const ShopItem = ({ el }: Props) => {
    const [likeBut, setLikeBut] = useState<string>("");
    const [basket, setBasket] = useState<string>("");

    useEffect(() => {
        const storedProducts: number[] = JSON.parse(localStorage.getItem('products')!) || [];
        const basketProducts: Product[] = JSON.parse(localStorage.getItem('basket')!) || [];

        setLikeBut(storedProducts.includes(el.id) ? "widget-active" : "");

        const existingProductIndex = basketProducts.findIndex((product: Product) => product.id === el.id);
        setBasket(existingProductIndex !== -1 ? "widget-active" : "");
    }, [el.id]);

    const updateLocalStorage = (key: string, data: any) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const addToWishlist = (id: number) => {
        if (typeof Storage !== "undefined") {
            let storedProducts: number[] = JSON.parse(localStorage.getItem('products')!) || [];
            const existingProductIndex = storedProducts.indexOf(id);

            if (existingProductIndex !== -1) {
                storedProducts.splice(existingProductIndex, 1);
                setLikeBut("");
            } else {
                storedProducts.push(id);
                setLikeBut("widget-active");
            }

            updateLocalStorage('products', storedProducts);
        } else {
            console.log("Sorry, your browser does not support localStorage.");
        }
    };

    const addToBasket = (id: number) => {
        if (typeof Storage !== "undefined") {
            let basketProducts: Product[] = JSON.parse(localStorage.getItem('basket')!) || [];
            const existingProductIndex = basketProducts.findIndex((product: Product) => product.id === id);

            if (existingProductIndex !== -1) {
                basketProducts.splice(existingProductIndex, 1);
                setBasket("");
            } else {
                basketProducts.push({
                    id,
                    price: el.price,
                    image: el.images[0],
                    sale: el.sale,
                    name: el.name,
                    size: 's',
                    quantity: 1,
                });
                setBasket("widget-active");
            }

            updateLocalStorage('basket', basketProducts);
        } else {
            console.log("Sorry, your browser does not support localStorage.");
        }
    };

    return (
        <div className="shop-item">
            <div className="shop-item__image">
                <Image src={el.images[0]} width={430} height={522} alt="shop" />
                <div className="shop-list__widget">
                    <div className={`${likeBut} bg-white cursor-pointer`} onClick={() => addToWishlist(el.id)}>
                        <FaHeart />
                    </div>
                    <div className={`${basket} bg-white cursor-pointer`} onClick={() => addToBasket(el.id)}>
                        <SlBasket />
                    </div>
                </div>
            </div>
            <div className="shop-item__text pt-5">
                <h2>{el.name}</h2>
                <h2 className="text-gray-500">{el.category}</h2>
                <div className="price flex-col gap-2 mt-2">
                    <div className="flex gap-2">
                        <p className="font-bold">{el.price}</p>
                        <p className="text-gray-500 line-through">{el.sale}</p>
                    </div>
                    <div><a href={`/${el.id}`}>детальніше</a></div>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;
