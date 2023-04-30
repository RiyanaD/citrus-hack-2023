import React from 'react'

const Navbar = () => {
    return (
        <div className="flex flex-col">
            <nav className="bg-black dark:bg-gray-900 fixed w-full z-10">
                <div className="w-full h-[80px] bg-white drop-shadow-md">
                    <div className='px-2 flex justify-between items-center w-full h-full'>
                        <div className="flex items-center">
                            <h1 className="text-4xl item Center font-bold pl-5 drop-shadow-xl">Veritas</h1>
                            <div className="flex-1"></div>
                        </div>
                        <div className="flex items-center">

                            <button className="transition hover:translate-y-1 duration-300 ease-out drop-shadow-lg border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 m-2">About Our Project</button>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
    );
};
    

export default Navbar