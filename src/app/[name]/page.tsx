"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import productData from '../product_data.json';

const sizes = ['s', 'm', 'l'];

export default function Page({ params }: { params: { name: string } }) {
    const [count, setCount] = useState(1);
    const [sizeActive, setSizeActive] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false); // Додаємо стан для відстеження, чи товар додано в кошик

    const data = productData.find((el: any) => el.id == params.name);

    const handleSizeClick = (index: number) => {
        setSizeActive(index);
    };

    const handleAddToCart = () => {
        const id = data?.id;

        if (typeof Storage !== 'undefined' && id) {
            const storedBasket = localStorage.getItem('basket');
            let basketProducts: any[] = storedBasket ? JSON.parse(storedBasket) : [];

            const existingProductIndex = basketProducts.findIndex((product) => product.id === id);

            if (existingProductIndex !== -1) {
                // If the product is already in the basket, update its quantity
                basketProducts[existingProductIndex].quantity += count;
            } else {
                // If the product is not in the basket, add it
                basketProducts.push({
                    id,
                    name: data?.name,
                    image: data?.images[0],
                    price: data?.price,
                    size: sizes[sizeActive],
                    quantity: count,
                });
            }

            // Update the localStorage with the new basket state
            localStorage.setItem('basket', JSON.stringify(basketProducts));

            // Set the state to true to show the notification
            setAddedToCart(true);

            // Optionally, you can provide feedback to the user
            console.log('Added to cart:', {
                id,
                name: data?.name,
                price: data?.price,
                size: sizes[sizeActive],
                quantity: count,
            });

            // Reset the notification after a few seconds
            setTimeout(() => {
                setAddedToCart(false);
            }, 3000);
        } else {
            console.log("Sorry, your browser does not support localStorage.");
        }
    };


    return (
        <div className="container mx-auto py-10">
            <div className="flex gap-10 flex-col lg:flex-row">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={2}
                    spaceBetween={10}
                    className="mySwiper h-[100%] w-[100%] lg:w-[50%]"
                >
                    {data?.images.map((el: string) => (
                        <SwiperSlide key={uuidv4()}>
                            <Image width={1000} height={1000} src={el} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="text w-[100%] lg:w-[50%]">
                    <div className="name">
                        <h2 className="text-4xl font-bold ">{data?.name}</h2>
                        <div className="flex gap-4 ">
                            <p className="font-bold py-4 text-2xl">{data?.price}</p>
                            <p className="line-through py-4 text-2xl">{data?.sale}</p>
                        </div>

                        <div className="flex gap-10">
                            <div>
                                <p className="py-4 font-bold">Розмір</p>
                                <div className="flex gap-2">
                                    {sizes.map((el, index) => (
                                        <button
                                            key={uuidv4()}
                                            className={`py-2 px-4 border ${index === sizeActive
                                                ? 'bg-black text-white'
                                                : 'hover:bg-black hover:text-white'
                                                } duration-150 ease-in-out`}
                                            onClick={() => handleSizeClick(index)}
                                        >
                                            {el}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="py-4 font-bold">Кількість</p>
                                <div className="counter flex gap-2 items-center">
                                    <button
                                        className="py-2 px-4 border bg-black text-white duration-150 ease-in-out"
                                        onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 1))}
                                    >
                                        -
                                    </button>
                                    <p>{count}</p>
                                    <button
                                        className="py-2 px-4 border bg-black text-white duration-150 ease-in-out"
                                        onClick={() => setCount((prevCount) => prevCount + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            className="mt-6 py-2 px-4 border hover:bg-black hover:text-white duration-150 ease-in-out"
                            onClick={handleAddToCart}
                        >
                            Додати в кошик
                        </button>

                        {addedToCart && (
                            <div className="mt-2 text-green-600">
                                Товар додано в кошик!
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <h2 className="py-6 font-bold text-4xl">Характеристики</h2>
            <ul className="grid grid-cols-4 gap-x-12 gap-y-4 py-6">
                {data?.description.map((el: any) => {
                    const elData = el.split(':');
                    return (
                        <li key={uuidv4()}>
                            <h2 className="font-bold">{elData[0]}</h2>
                            <p>{elData[1]}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
