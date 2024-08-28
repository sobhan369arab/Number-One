import React from 'react'

const LatestBlogs = ({ name, date }) => {
    return (
        <div className='w-full flex justify-between'>
            <span>{name}</span>
            <span>{date}</span>
        </div>
    )
}

export default LatestBlogs
