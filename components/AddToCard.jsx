import { buyphone } from '@/redux/ActionStore'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const AddToCard = () => {
    const dispatch = useDispatch()
    const name = useRef()
    const price = useRef()
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(buyphone(name.current.value , price.current.value))
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='name' ref={name} className='text-red-500'/>
        <input type="text" placeholder='price' ref={price} className='text-red-500' />
        <button type="submit"  class="bg-pink-500 hover:bg-blue-500 text-red-100 font-bold py-2 px-4 rounded-full">add</button>
      </form>
    </div>
  )
}

export default AddToCard
