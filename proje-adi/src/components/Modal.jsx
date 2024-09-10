import React, { useState } from 'react'
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';

const Modal = ({title,content,btnText,btnFunc}) => {
const dispatch=useDispatch();
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center'>
      <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
<div className='border-b my-3 flex items-center justify-between '>
    <div className='text-2xl'>{title}</div>
    <FaWindowClose onClick={()=>dispatch(modalFunc())} size={24} />
</div>
{content}
</div>
</div>
  )
}

export default Modal