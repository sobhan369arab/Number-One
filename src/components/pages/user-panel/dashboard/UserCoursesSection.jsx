import { Link } from 'react-router-dom'

const UserCoursesSection = ({ sectionName, children }) => {
    return (
        <div className='w-1/2 flex flex-wrap justify-center'>
            <h1 className='w-full text-xl text-neutral-400'>{sectionName}</h1>
            <div className='w-full mt-6 flex flex-wrap gap-y-4'>
                {children}
            </div>
            <Link className='text-neutral-400'>مشاهده همه</Link>
        </div>
    )
}

export default UserCoursesSection
