import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Nav from "@/app/components/Nav/Nav";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={"container mx-auto grid grid-cols-3 items-center pt-5 pb-5"}>
            <Nav />

            <Link href="/" className="logo text-3xl font-bold  mx-auto">FAMDY</Link>

            <div className={"flex gap-4 ml-auto"}>
                <a href="/likes" > <FaRegHeart /></a>
                <a href="/basket" > <SlBasket /></a>
            </div>
        </header>
    )
}
