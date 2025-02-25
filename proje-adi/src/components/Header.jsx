import React from 'react'
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';
import { sortingDataFunc } from '../redux/dataSlice';
const Header = () => {
    const dispatch=useDispatch();
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-indigo-600 text-white'>
<div className='text-3xl'>React uygulama</div>
<div className='flex items-center gap-5'>
    <div className='text-black'>
        <select classname="h-10 rounded-lg" name=""id="">
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
        </select>
    </div>
    <div>
        <input classname="h-10 rounded-lg px-4 "
        type="text" placeholder='Arama Yapınız'/>
    </div>
    <div onClick={()=>dispatch(modalFunc())}
    className='bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'
    ><MdPostAdd size={24}/>
 </div>
</div>
    </div>
  )
}

export default Header