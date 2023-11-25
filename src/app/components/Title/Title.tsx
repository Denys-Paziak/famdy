import React from 'react';

const Title = ({children}: {children: string} ) => {
    return (
        <div className={"title mt-10 mb-10 flex justify-between"}>
            <div>
                <h1 className={"text-4xl uppercase font-300"}>{children}</h1>
                <h1 className={"title-bg text-6xl uppercase font-300"}>{children}</h1>
            </div>
            <a href="#">Всі товари</a>
        </div>
    );
};

export default Title;
