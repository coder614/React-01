import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
        <>
           <h1 className='text-center text-3xl p-4 bg-gray-800 text-white mx-14 my-4'>User : {id}</h1>
        </>
    )
}

export default User