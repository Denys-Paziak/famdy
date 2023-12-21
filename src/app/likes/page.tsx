"use client"

import data from "../product_data.json";
import { v4 as uuidv4 } from 'uuid';

interface Product {
    id: number;
    images: string[];
    name: string;
    price: string;
    // Add other properties of your 'el' object here
}

const Likes = () => {
    // Parse localStorage and ensure it's not null
    const storedProducts: number[] = JSON.parse(localStorage.getItem('products') || '[]');

    const products: Product[] = [];

    console.log(storedProducts);
    console.log("s");

    data.forEach((el: Product) => {
        if (storedProducts.includes(el.id)) {
            products.push(el);
        }
    });

    return (
        <div className="min-h-[80vh]">
            <div className='container mx-auto grid grid-cols-2 gap-6 py-6'>
                {products.map(el => (
                    <a key={uuidv4()} href={`/${el.id}`} className="flex items-center gap-2">
                        <img className="w-[50px] h-[50px] object-cover" src={el.images[0]} alt="" />
                        <div>
                            <p>{el.name}</p>
                            <p className="font-bold">{el.price}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Likes;
