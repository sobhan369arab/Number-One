
const TopSection = ({ title, describe, Style }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-xl font-semibold'>مریم</h1>
        <p className='mediumStyle_text text-sm'>21 تیر 1403</p>
      </div>
      <h1 className={`text-lg font-semibold mt-3 ${Style}`}>{title}</h1>
      <h2 className='mediumStyle_text'>{describe}</h2>
    </div>
  )
}

export default TopSection