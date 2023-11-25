import React from 'react';
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import "./shopItem.css"

import data from "../../product_data.json";

const ShopItem = () => {
    return (
        <div className={"shop-list"}>
            {data.slice(0, 8).map(el => {
                return <a href={"#"} className={"shop-item"}>
                    <div className="shop-item__image">
                        <Image src={el.images[0]} width={430} height={522} alt={"shop"}/>
                        <div className="shop-list__widget">
                            <div>
                                <CiHeart />
                            </div>
                            <div>
                                <MdCompareArrows />
                            </div>
                        </div>
                    </div>
                    <div className="shop-item__text pt-5">
                        <h2>{el.name}</h2>
                        <h2 className={"text-gray-500 "}>Категорія</h2>
                        <div className="price flex-col gap-2 mt-2">
                            <div className={"flex gap-2"}>
                                <p className={"font-bold "}>{el.price}</p>
                                <p className={"text-gray-500 line-through"}>{el.sale}</p>
                            </div>
                            <div>
                                детальніше
                            </div>
                        </div>
                    </div>
                </a>
            })}
        </div>

    );
};

export default ShopItem;
