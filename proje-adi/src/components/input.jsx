import React from 'react'

const Input = ({placeholder,type,id,name,onChange,value}) => {
  return (
   <input className='h-10 w-full border rounded-md p-2 mt-2 outline-none'
   placeholder={placeholder}
    type={type} id={id} name={name}
   onChange={onChange}
   value={value}/>
   
  )
}

export default Input