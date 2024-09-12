import { useParams } from "react-router-dom"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { Blogs_data } from "../../core/constants/blogs/blogs-data";
import { BlogBiography, BlogPic, DetailsSection, RelatedSection } from "../../components/pages/blog-detail";

const BlogDetail = () => {
    const { id } = useParams();
    const blogSelected = Blogs_data.find(blog => blog.id == id)
    return (
        <>
            <TitleSection title={blogSelected.title} />
            <div className="main-container flex gap-7">
                <RelatedSection />
                <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                    <BlogPic image={blogSelected.img} />
                    <DetailsSection
                        category={blogSelected.category}
                        date={blogSelected.date}
                        view={blogSelected.view}
                        studyTime={blogSelected.studyTime}
                        commentsNumber={blogSelected.commentsNumber}
                    />
                    <BlogBiography
                        title={blogSelected.title}
                        bio={blogSelected.bio}
                    />
                </div>
            </div>
        </>
    )
}

export default BlogDetail