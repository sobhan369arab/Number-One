import { Link } from 'react-router-dom'
import ChangeMoment from '../../../../core/utility/moment/ChangeMoment'

const LatestBlogs = ({ name, date, id }) => {
    return (
        <Link to={`/BlogDetails/${id}`} className='w-full flex justify-center sm:justify-between group cursor-pointer'>
            <span className='text-center sm:text-start group-hover:text-VioletBlue'>{name}</span>
            <span dir='ltr' className='hidden md:block font-Number text-2xl group-hover:text-VioletBlue'>{ChangeMoment(date)}</span>
        </Link>
    )
}

export default LatestBlogs
