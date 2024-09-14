import { useParams } from "react-router-dom"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { Blogs_data } from "../../core/constants/blogs/blogs-data";
import { BlogBiography, BlogPic, DetailsSection, RelatedBlogs } from "../../components/pages/blog-detail";
import OverView_Details from "../../components/common/OverView_Details";
import { useTranslation } from "react-i18next";
import { ToLike } from "../../components/common";

const BlogDetail = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const blogSelected = Blogs_data.find(blog => blog.id == id)
    return (
        <>
            <TitleSection title={blogSelected.title} />
            <div className="main-container lg:flex lg:flex-row-reverse  gap-7">
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
                    <OverView_Details training={blogSelected.bio} MajorElements={blogSelected.MajorElements} Class={"hidden"} titleLearning={'LearnBlog'} />
                    <div className="border-y-2 my-7 py-5">
                        <div className="flex gap-8 w-fit max-sm:m-auto">
                            <p className="font-semibold">{t('blogFavorite')}</p>
                            <ToLike likeNumber={blogSelected.like} disLikeNumber={blogSelected.disLike} numberStatus="hidden" />
                        </div>
                    </div>
                </div>
                <RelatedBlogs category={blogSelected.category} />
            </div>
        </>
    )
}

export default BlogDetail