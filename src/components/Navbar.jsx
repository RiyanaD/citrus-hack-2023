import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-black dark:bg-grey-900">
            <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-md">
                <div className='px-2 flex justify-between items-center w-full h-full'>
                    <div className="flex items-center">
                        <h1 className="text-4xl item Center font-bold pl-5">Veritas</h1>
                        <button className="flex justify-between mr-auto">About Our Project</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar