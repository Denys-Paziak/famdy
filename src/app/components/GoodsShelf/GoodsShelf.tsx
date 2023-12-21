import React, { useState } from 'react';
import data from "../../product_data.json";
import ShopItem from '../ShopItem/ShopItem';
import { Pagination } from '../Pagination/Pagination';
import { v4 as uuidv4 } from 'uuid';

interface iProps {
    limit: number,
    numCol: number,
    page: number,
    categoryFilter: string,
}


export const GoodsShelf = ({ limit, numCol, page, categoryFilter }: iProps) => {


    let result = [...data];
    let gridCol = "grid-cols-" + numCol;

    // Apply category filter
    if (categoryFilter) {
        if (categoryFilter !== "all") {
            result = result.filter(el => el.category === categoryFilter);
        }
    }

    let numPage: number = Math.ceil(result.length / limit);

    let startItems = (page - 1) * limit;
    let endItems = startItems + limit;

    if (limit >= 0) {
        result = result.slice(startItems, endItems);
    }

    return (
        <>
            <div className={`shop-list grid gap-6 ${gridCol}`}>
                {result.map(el => (
                    <ShopItem key={el.name + uuidv4()} el={el} />
                ))}
            </div>
            <Pagination numPage={numPage} activePage={page} categoryFilter={categoryFilter} />

        </>
    );
};
