import React from 'react'
import { useSelector } from 'react-redux'
const Product = ()=>{
    const data = useSelector(state=>state)
    return (
        <>
        {
            data.map(item=>{
                return <h1 className='text-pink-300'>{item.name}</h1>
            })
        }
        </>
    )
}
export default Product