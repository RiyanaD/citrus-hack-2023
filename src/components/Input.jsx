import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa"


const Input = () => {
    const [inputURL, setInputURL] = useState('');
    const handleButtonClick = () => {
        //calling script with inputURL
    };
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
                        value = {inputURL}
                        onChange = {(event) => setInputURL(event.target.value)}
                        className="opacity-50 text-center w-2/3 bg-white rounded-md border-gray-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Enter URL here" 
                    />
                </div>
                <div className = "flex justify-center mt-2">
                    <button
                        className = "transition hover:translate-y-1 duration-300 ease-out text-white bg-white-100 rounded-md border-white-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 font-bold text-1xl m-3"
                        onClick = {handleButtonClick}>
                        Submit
                        <FaSearch className="text-2xl pl-2 text-white text-center inline-block align-middle mr-2" />
                    </button>
                </div>
            </form>
        </div>
        
    );
};

export default Input

//BiSearchAlt


{/* <form>
<div className="text-white text-center font-mono">Enter link: </div>
<div className = "flex justify-center">
    <input 
        type="url"
        value = {inputURL}
        onChange = {(event) => setInputURL(event.target.value)}
        className="w-2/3 bg-white rounded-md border-gray-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Enter URL here" 
    />
    <button 
        className = "bg-white-100 rounded-md border-white-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50"
        onClick = {handleButtonClick}>
        <FaSearch className="inline-block align-middle mr-2" />
    </button>
    
</div>
</form> */}