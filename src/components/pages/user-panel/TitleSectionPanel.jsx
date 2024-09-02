const TitleSectionPanel = ({ name, Icon }) => {
  return (
    <div className="flex items-end gap-x-3 bg-white absolute -top-8 right-0">
      <div className='userPanel_icons static'>
        <Icon />
      </div>
      <h1 className="boldStyle_text text-2xl mb-1.5 pl-4">{name}</h1>
    </div>
  )
}

export default TitleSectionPanel

