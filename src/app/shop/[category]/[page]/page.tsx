"use client";

import React, { useEffect, useState } from 'react'
import Title from '../../../components/Title/Title'
import { GoodsShelf } from "@/app/components/GoodsShelf/GoodsShelf";
import Filter from "@/app/components/Filter/Filter";
import { Pagination } from '../../../components/Pagination/Pagination';
import data from "../../../product_data.json";
import Link from 'next/link';

export default function Page({ params }: { params: { category: string, page: number } }) {

    const [col, setCol] = useState(4);
    const [limit, setSetLimit] = useState(20);
    const [category, setCategory] = useState("All");

    useEffect(() => {
        if (params.category == "new") {
            setCategory("Новинки");
        } else if (params.category == "clothes") {
            setCategory("Верхній одяг");
        } else if (params.category == "footwear") {
            setCategory("Взуття");
        } else if (params.category == "accessories") {
            setCategory("Аксесуари");
        } else {
            setCategory("all");
        }
    })

    return (
        <div className='container mx-auto'>
            <Title>Магазин</Title>
            <div className='flex gap-6 py-6'>
                <div className='flex flex-wrap gap-2'>
                    <h2 className="font-bold">Категорія:</h2>
                    <div className="flex gap-2 ">
                        <Link href={"/shop/all/1"}>Все</Link>
                        <Link href={"/shop/new/1"}>Новинки</Link>
                        <Link href={"/shop/clothes/1"}>Верхній одяг</Link>
                        <Link href={"/shop/footwear/1"}>Взуття</Link>
                        <Link href={"/shop/accessories/1"}>Аксесуари</Link>
                    </div>
                </div>
            </div>

            <GoodsShelf data={data} limit={limit} numCol={col} categoryFilter={category} page={params.page} />
        </div>
    )
}
