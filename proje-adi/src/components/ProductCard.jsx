import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteDataFunc, updateDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import {useNavigate} from "react-router-dom"
const ProductCard = ({ dt}) => {
    const [openEdit,setOpenEdit]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const updateFunc=()=>{
      dispatch(modalFunc())
      setOpenEdit(false)
      navigate(`/?update=${dt?.id}`)
     
    }
    return (
      <div className='w-[200px] h-[200px] relative m-2 rounded-md'>
          <img 
            className="w-full h-full rounded-md"
            src={dt?.url} 
            alt="Product Image"
          />
          <div className='absolute left-0 bottom-0 bg-indigo-600 px-2 text-white w-full'>
            <div className='text-lg font-semibold'>{dt?.name}</div>
            <div className=''>{dt?.price}</div>
          </div>
          <div onClick={()=>setOpenEdit(!openEdit)}
           className='absolute top-0 right-2'>
            <BsThreeDots color='white' size={24}/>
            </div>
            {openEdit &&(
                 <div className='bg-black border border-white text-white absolute top-5 right-0 p-2 text-sm rounded-lg'>
<div onClick={()=>dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Sil</div>
<div onClick={updateFunc} className='cursor-pointer'>Güncelle</div>
            </div>
            ) }
      </div>
    );
  }
  

export default ProductCard