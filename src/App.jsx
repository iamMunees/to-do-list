import { useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import './App.css'

function App() {

  const [addValue, setAddValue] = useState('');
  const [data, setData] = useState([]);

  const handleAdd = () => {
    if (!addValue) {
      setData([...Data, addValue])
    }
    else {
      alert('Save the Task')
    }
    setData([...data, addValue]);
    setAddValue('')
  }

  const handleRemove=(index)=>{
    const remove =data.filter((item,indexItem)=>indexItem!==index);
    setData(remove)
  }

  return (
    <div className='bg-slate-900 w-full h-screen flex flex-col justify-center flex-wrap'>
      <div className='flex justify-center'>
        <p className='font-bold text-3xl text-white'>Todo List save your Taks</p>
      </div>
      <div className='flex justify-center items-center mt-5 px-2'>
        <input className='border-2 border-gray-300 rounded-lg px-8 py-1' type="text" placeholder='Enter The Task' onChange={(e) => setAddValue(e.target.value)} value={addValue} />
        <button className='bg-sky-500 text-white hover:text-black md:ml-5 ml-2 px-4 py-1 rounded-lg hover:-translate-x-1 hover:scale-100  duration-300' onClick={() => handleAdd()}>Add</button>
      </div>
      <div>
        <ul>
          {
            data.map((currItem, index) => {
              return (
                <div className='flex gap-6 justify-center mt-5'>
                  <li className='border-2 text-white text-center border-blue-500 w-40 overflow-hidden rounded-lg py-1'>{currItem}</li>
                  <button onClick={() => handleRemove(index)} className='bg-red-500 flex items-center p-2 text-white rounded-lg px-3 hover:-translate-x-1 hover:scale-100 duration-300'>Remove <RiDeleteBin5Line /></button>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
