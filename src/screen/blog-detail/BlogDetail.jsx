import { useParams } from "react-router-dom"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { Blogs_data } from "../../core/constants/blogs/blogs-data";

const BlogDetail = () => {
    const {id} = useParams();
    const blogSelected = Blogs_data.find(blog => blog.id == id)
  return (
    <>
        <TitleSection title={blogSelected.title}/>
    </>
  )
}

export default BlogDetail