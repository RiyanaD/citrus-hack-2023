import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa"

const Input = () => {
    const [inputURL, setInputURL] = useState('');
    const handleButtonClick = () => {
        //calling script with inputURL
    };
    return (  
        <div className = "flex flex-col">
            <form>
                <div className="text-white text-center font-mono">Enter link: </div>
                <div className = "flex justify-center">
                    <input 
                        type="url"
                        value = {inputURL}
                        onChange = {(event) => setInputURL(event.target.value)}
                        className="text-center w-2/3 bg-white rounded-md border-gray-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Enter URL here" 
                    />
                </div>
                <div className = "flex justify-center mt-2">
                    <button 
                        className = "text-white bg-white-100 rounded-md border-white-300 border px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick = {handleButtonClick}>
                        Submit
                        <FaSearch className="text-2x1 pl-2 text-white text-center inline-block align-middle mr-2" />
                    </button>
                </div>
            </form>
            <div>{inputURL}</div>
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