
import Image from "next/image";

import React, { useState } from 'react';

const EmailSection = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="flex gap-10 container mx-auto pt-20 flex-col lg:flex-row">
            <div className="bg-gray-300 h-1/2">
                <Image className={"h-full"} src={"/img/email.jpg"} width={1000} height={1000} alt={"Image"} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center bg-gray-100 p-10">
                <h2 className="text-3xl font-300">Приєднуйтесь до наших новин зараз</h2>
                <p className="text-gray-400">Клієнт, який незадоволений з певної причини, є проблемою, а клієнт, який незадоволений, але не може бути незадоволеним, не є проблемою.</p>
                <form method="POST" action={"http://2914767.ni514080.web.hosting-test.net/mycourse.php"} className="flex gap-2 w-full">
                    <input
                        className="bg-white w-full border-2 py-2 px-5"
                        type="email"
                        name="recipient"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="bg-black text-white border-2 py-2 px-5"
                        type="submit"
                        value="Підписатися"
                    />
                </form>
                <p className="text-gray-400">Буде використано відповідно до нашої Політики конфіденційності</p>
            </div>
        </div>
    );
};

export default EmailSection;

