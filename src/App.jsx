
import {useState } from 'react'
import Navbar from './components/Navbar'
import Input from './components/Input'



function App() {

  // const [percetanges] = useState(null);

  // const getDataOnClick() = async () => {
  //   setIsLoading(true):

  //   try {
  //     const response = await fetch()
  //   }
  //}

  return (
    <div className="bg-gradient-to-br from-blue-700 to-indigo-200 h-screen">
      <Navbar />
      <Input />
    </div>
  );
}

export default App
