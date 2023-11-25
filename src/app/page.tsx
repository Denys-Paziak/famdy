"use client"
import HomeSlider from "@/app/components/HomeSlider/HomeSlider";
import ShopItem from "@/app/components/ShopItem/ShopItem";
import Title from "@/app/components/Title/Title";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <HomeSlider/>
            <div className="container mx-auto">

                <Title>Магазин</Title>
                <ShopItem/>


                <Title>Категорії</Title>

                <div className="category-grid gap-10">
                    <a href={"#"} className="category-grid-item1  category-item flex items-center justify-center hover:text-amber-300">
                        <h2 className={"text-3xl font-bold uppercase"}>Одяг </h2>
                        <h2 className={"category-item__hover-text text-9xl font-bold text-white"}>Одяг </h2>
                        <Image src={"/img/homeSlider/1.jpg"} width={1000} height={1000} alt={"category image"}/>
                    </a>
                    <a href={"#"} className=" category-grid-item2 category-item flex items-center justify-center hover:text-amber-300">
                        <h2 className={"text-3xl font-bold uppercase"}>Кросівки </h2>
                        <h2 className={"category-item__hover-text text-9xl font-bold text-white"}>Кросівки </h2>
                        <Image src={"/img/category/Footwear.jpg"} width={1000} height={1000} alt={"category image"}/>
                    </a>
                    <a href={"#"} className="category-grid-item3 category-item flex items-center justify-center hover:text-amber-300">
                        <h2 className={"text-3xl font-bold uppercase"}>Аксесуари </h2>
                        <h2 className={"category-item__hover-text text-9xl font-bold text-white"}>Аксесуари </h2>
                        <Image src={"/img/homeSlider/3.jpg"} width={1000} height={1000} alt={"category image"}/>
                    </a>
                    <a href={"#"} className="category-grid-item4 category-item flex items-center justify-center hover:text-amber-300">
                        <h2 className={"text-3xl font-bold uppercase"}>Аксесуари </h2>
                        <h2 className={"category-item__hover-text text-9xl font-bold text-white"}>Аксесуари </h2>
                        <Image src={"/img/homeSlider/3.jpg"} width={1000} height={1000} alt={"category image"}/>
                    </a>
                </div>

            </div>
        </>
    )
}
