import ImportantPoints from "./ImportantPoints"

const BlogBiography = ({ title, bio }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-gray-500 text-sm mt-4 mb-14">{bio}</p>
      <ImportantPoints bio={bio}/>

    </div>
  )
}

export default BlogBiography