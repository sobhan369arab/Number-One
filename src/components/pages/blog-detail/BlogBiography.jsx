import ImportantPoints from "./ImportantPoints"

const BlogBiography = ({ title, bio }) => {
  return (
    <div className="mb-10 ">
      <h1 className="text-2xl font-semibold max-sm:text-center text-DarkBlue">{title}</h1>
      <p className="text-gray-500 text-sm mt-4 mb-14 max-sm:text-center">{bio}</p>
      <ImportantPoints bio={bio}/>
    </div>
  )
}

export default BlogBiography