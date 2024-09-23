
const TopSection = ({title,describe}) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-xl font-semibold'>مریم</h1>
        <p className='text-gray-500 text-sm'>21 تیر 1403</p>
      </div>
      <h1 className='text-lg font-semibold mt-3'>{title}</h1>
      <p className='text-gray-500'>{describe}</p>
    </div>
  )
}

export default TopSection