import React from 'react';
import Image from "next/image";

const EmailSection = () => {
    return (
        <div className={"flex gap-10 container mx-auto pt-20 flex-col lg:flex-row"}>
            <div className={"bg-gray-300 h-1/2"}>
                <Image className={"h-full"} src={"/img/email.jpg"} width={1000} height={1000} alt={"Image"} />
            </div>
            <div className={"flex flex-col gap-4 justify-center items-center text-center bg-gray-100 p-10"}>
                <h2 className={"text-3xl font-300"}>Приєднуйтесь до наших новин зараз</h2>
                <p className={"text-gray-400"}>Клієнт, який незадоволений з певної причини, є проблемою, а клієнт, який незадоволений, але не може бути незадоволеним, не є проблемою.</p>
                <form action="" className={"flex gap-2 w-full"}>
                    <input className={"bg-white w-full border-2 py-2 px-5"} type="text" placeholder={"Email"} />
                    <input className={"bg-black text-white border-2 py-2 px-5"} type="submit" />
                </form>
                <p className={"text-gray-400"}>Буде використано відповідно до нашої Політики конфіденційності</p>
            </div>
        </div>
    );
};

export default EmailSection;
