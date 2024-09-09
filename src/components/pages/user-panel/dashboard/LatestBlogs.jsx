import React from 'react'

const LatestBlogs = ({ name, date }) => {
    return (
        <div className='w-full flex justify-center sm:justify-between'>
            <span className='text-center sm:text-start'>{name}</span>
            <span className='hidden md:block'>{date}</span>
        </div>
    )
}

export default LatestBlogs
