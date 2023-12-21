"use client"
import React, { useEffect, useState } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { MdEdit } from "react-icons/md";
import EditProductModal from '../components/EditProductModal/EditProductModal';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    size: string;
    quantity: number;
}

const Basket = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    useEffect(() => {
        const storedProducts: Product[] | null = JSON.parse(localStorage.getItem('basket')!) || [];
        if (storedProducts !== null) {
            setProducts(storedProducts);
        }
    }, []);

    useEffect(() => {
        let price = 0;
        products.forEach((el) => {
            price += parseInt(el.price.split(' ')[0]) * el.quantity;
        });
        setTotalPrice(price);
    }, [products]);

    const removeFromBasket = (id: number) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        updateLocalStorage('basket', updatedProducts);
    };

    const updateLocalStorage = (key: string, data: any[]) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const openEditModal = (product: Product) => {
        setEditingProduct(product);
    };

    const closeEditModal = () => {
        setEditingProduct(null);
    };

    const saveEditedProduct = (updatedProduct: Product) => {
        const updatedProducts = products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        updateLocalStorage('basket', updatedProducts);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {

            const formData: any = new FormData(e.target);

            const response = await fetch('http://2823362.ni514080.web.hosting-test.net/order.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData) as URLSearchParams,
            });

            if (response.ok) {
                // Handle success, maybe show a success message
                console.log('Order placed successfully!');
            } else {
                // Handle error, maybe show an error message
                console.error('Failed to place the order:', await response.text());
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <div className="min-h-[80vh]">
            <div className="container mx-auto flex flex-col gap-6 py-6">
                {products.length === 0 ? (
                    <p>
                        Товарів немає. <Link href="/shop/all/1">Перейти в магазин</Link>.
                    </p>
                ) : (
                    <>
                        {products.map((el) => (
                            <div key={uuidv4()} className="flex items-center gap-2 py-2">
                                <img className="w-[50px] h-[50px] object-cover" src={el.image} alt="" />
                                <div>
                                    <p>{el.name}</p>
                                    <p className="font-bold">
                                        {el.price} x {el.quantity} = {parseInt(el.price.split(' ')[0]) * el.quantity} грн
                                    </p>
                                    <p className="font-normal">
                                        Розмір: {el.size}, Кількість: {el.quantity}
                                    </p>
                                </div>

                                <div className="flex gap-2 ml-auto">
                                    <div className=" flex items-center justify-center rounded-[50%] hover:bg-black hover:text-white transition duration-150 ease-out cursor-pointer w-[30px] h-[30px]">
                                        <MdEdit className="w-[20px] h-[20px]" onClick={() => openEditModal(el)} />
                                    </div>

                                    <div className="rounded-[50%] hover:bg-black hover:text-white transition duration-150 ease-out cursor-pointer">
                                        <CiCircleRemove className="w-[30px] h-[30px]" onClick={() => removeFromBasket(el.id)} />
                                    </div>
                                </div>

                            </div>
                        ))}

                        {editingProduct && (
                            <EditProductModal
                                product={editingProduct}
                                onSave={saveEditedProduct}
                                onClose={closeEditModal}
                            />
                        )}

                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-2xl">Всього:</h2>
                            <p className="font-bold text-2xl">{totalPrice} грн</p>
                        </div>

                        <form onSubmit={handleSubmit} className={'flex flex-col items-center w-full'}>
                            <div className={"grid grid-cols-2 gap-6 w-full"}>
                                <div>
                                    <h2>Ім'я *</h2>
                                    <input className={"w-full p-2 bg-gray-200 rounded"} type="text" name="name" id="name" required />
                                </div>
                                <div>
                                    <h2>Прізвище *</h2>
                                    <input className={"w-full p-2 bg-gray-200 rounded"} type="text" name="surname" id="surname" required />
                                </div>
                                <div>
                                    <h2>Адреса вулиці *</h2>
                                    <input className={"w-full p-2 bg-gray-200 rounded"} type="text" name="street" id="street" required />
                                </div>
                                <div>
                                    <h2>Поштовий індекс *</h2>
                                    <input className={"w-full p-2 bg-gray-200 rounded"} type="text" name="postalCode" id="postalCode" required />
                                </div>
                                <div>
                                    <h2>Телефон *</h2>
                                    <input className={"w-full p-2 bg-gray-200"} type="text" name="phone" id="phone" required />
                                </div>
                                <div>
                                    <h2>Електронна адреса *</h2>
                                    <input className={"w-full p-2 bg-gray-200"} type="text" name="email" id="email" required />
                                </div>
                                {/* Additional fields for product details */}
                                {products.map((product) => (
                                    <React.Fragment key={product.id}>
                                        <input type="hidden" name={`products[${product.id}][name]`} value={product.name} />
                                        <input type="hidden" name={`products[${product.id}][price]`} value={product.price} />
                                        <input type="hidden" name={`products[${product.id}][size]`} value={product.size} />
                                        <input type="hidden" name={`products[${product.id}][quantity]`} value={product.quantity} />
                                    </React.Fragment>
                                ))}
                            </div>

                            <button className="mt-6 py-2 px-4 border hover:bg-black hover:text-white duration-150 ease-in-out" type="submit">
                                Надіслати замовлення
                            </button>
                        </form>

                    </>
                )}
            </div>
        </div>
    );
};

export default Basket;
