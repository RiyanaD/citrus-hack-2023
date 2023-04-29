import React,{useState} from 'react'


const Input = () => {
    return (  
        <div className = "flex flex-col">
             <div className='max-w-[1240px] mx-auto px-2 mt-[80px]'>
                <p className='text-5xl py-8 text-white font-bold font-sans font-family: -apple-system text-center pt-6 drop-shadow-lg'>
                    Enter a News Website to measure it's authenticity
                </p>
            </div>
            <form>
                <div className="text-white text-center font-bold font-sans font-family: -apple-system drop-shadow-lg p-4">Enter News Link: </div>
                <div className = "flex justify-center">
                    <input 
                        type="url" 
                        className="text-center w-2/3 bg-white rounded-md  border px-3 py-2 focus:outline-none " placeholder="Enter URL here" />
                </div>
            </form>
            <button className="transition hover:translate-y-1 duration-300 ease-out text-white font-bold font-sans font-family: -apple-system text-center drop-shadow-lg flex flex-col mx-auto outline outline-white p-3 rounded-lg m-4">
                Submit
            </button>
        </div>
    );
};

export default Input
