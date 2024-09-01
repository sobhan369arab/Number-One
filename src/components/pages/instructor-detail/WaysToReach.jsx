const WaysToReach = ({ Icon, detail }) => {
    return (
        <li className='flex gap-x-2'>
            <div className='w-6 h-full flex items-center justify-center'>
                <Icon width="20px" />
            </div>
            <span dir='ltr'>{detail}</span>
        </li>
    )
}

export default WaysToReach
