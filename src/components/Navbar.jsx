import React from 'react'


    // <div className = "flex flex-col">
    //     <nav className="bg-black dark:bg-gray-900">
    //         <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-md">
    //             <div className='px-2 flex justify-between items-center w-full h-full'>
    //             <div className="flex items-center">
    //                 <h1 className="text-4xl item Center font-bold pl-5">Veritas</h1>
    //                 <div className="flex-1"></div>
    //             </div>
    //             <div className="flex items-center">
    //                 <button className="mr-2 border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">Home</button>
    //                 <button className="mr-2 border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">About</button>
    //                 <button className="border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">Model</button>
    //             </div>
    //             </div>
    //         </div>
    //     </nav>

    //     <div className='max-w-[1240px] mx-auto px-2'>
            
    //         <p className='text-2xl py-8 text-gray-500 text-center'>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
    //         ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
    //         nostrum tempore.
    //         </p>
    //     </div>
    //     <form>
    //             <div className="text-white text-center font-mono">Enter link: </div>
    //             <input type="text" className="mx-auto w-2/3 bg-white rounded-md border-gray-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Enter URL here" />
    //     </form>
    // </div>

    const Navbar = () => {
        return (
            <div className="flex flex-col">
                <nav className="bg-black dark:bg-gray-900 fixed w-full z-10">
                    <div className="w-full h-[80px] bg-white drop-shadow-md">
                        <div className='px-2 flex justify-between items-center w-full h-full'>
                            <div className="flex items-center">
                                <h1 className="text-4xl item Center font-bold pl-5">Veritas</h1>
                                <div className="flex-1"></div>
                            </div>
                            <div className="flex items-center">
                                <button className="mr-2 border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">Home</button>
                                <button className="mr-2 border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">About</button>
                                <button className="border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">Model</button>
                            </div>
                        </div>
                    </div>
                </nav>
    
                <div className='max-w-[1240px] mx-auto px-2 mt-[80px]'>
                    <p className='text-2xl py-8 text-gray-500 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                        ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
                        nostrum tempore.
                    </p>
                </div>
                <form>
        <div className="text-white text-center font-mono">Enter link: </div>
        <input type="text" className="w-2/3 bg-white rounded-md border-gray-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Enter URL here" />
</form>
            </div>
            
        );
    };
    

export default Navbar

/* <div className = "flex flex-col">
<nav className="bg-black dark:bg-gray-900">
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-md">
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className="flex items-center">
            <h1 className="text-4xl item Center font-bold pl-5">Veritas</h1>
            <div className="flex-1"></div>
        </div>
        <div className="flex items-center">
            <button className="mr-2 border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">Home</button>
            <button className="mr-2 border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">About</button>
            <button className="border border-gray-400 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">Model</button>
        </div>
        </div>
    </div>
</nav>

<div className='max-w-[1240px] mx-auto px-2'>
    
    <p className='text-2xl py-8 text-gray-500 text-center'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
    ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
    nostrum tempore.
    </p>
</div>
<form>
        <div className="text-white text-center font-mono">Enter link: </div>
        <input type="text" className="w-2/3 bg-white rounded-md border-gray-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Enter URL here" />
</form>
</div> */

