import React from 'react'
import {FaHeart} from "react-icons/fa";
import {SlBasket} from "react-icons/sl";

export const Header = () => {
    return (
        <header className={"container mx-auto grid grid-cols-3 items-center pt-5 pb-5"}>
            <nav className={"flex items-center gap-4"}>
                <a href="#" >Головна</a>
                <a href="#" >Магазин</a>
                <a href="#" >Про нас</a>
                <a href="#" >Контакти</a>
            </nav>

            <a href={"#"} className="logo text-3xl font-bold hover:text-amber-300  mx-auto">FAMDY</a>

            <div className={"flex gap-4 ml-auto"}>
                <a href="#" > <FaHeart/></a>
                <a href="#" > <SlBasket/></a>
            </div>
        </header>
    )
}
