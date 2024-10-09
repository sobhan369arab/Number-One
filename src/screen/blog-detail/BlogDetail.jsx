import { useParams } from "react-router-dom"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { Blogs_data } from "../../core/constants/blogs/blogs-data";
import { BlogBiography, BlogPic, DetailsSection, RelatedBlogs } from "../../components/pages/blog-detail";
import OverView_Details from "../../components/common/OverView_Details";
import { useTranslation } from "react-i18next";
import { CommentSection, ToLike } from "../../components/common";
import BreadCrumb from "../../components/partials/title-section/BreadCrumb";
import { useQuery } from "@tanstack/react-query";
import GetBlogWithId from "../../core/services/api/GetData/GetBlogWithId";
import GetNewsComments from "../../core/services/api/GetData/GetNewsComments";

const BlogDetail = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    // const blogSelected

    const { data, isSuccess } = useQuery({
        queryKey: ['GET_BLOG_DETAILS'],
        queryFn: async () => { return await GetBlogWithId(id) }
    })

    // Comment call api with react Query
    const { data: commentData, isSuccess: commentSuccess } = useQuery({
        queryKey: ['GET_COMMENTS_BLOG'],
        queryFn: () => { return GetNewsComments(id) }
    })


    const {
        title,
        currentImageAddress,
        newsCatregoryName,
        updateDate,
        currentView,
        commentsCount,
        googleDescribe,
        miniDescribe,
        currentLikeCount,
        currentDissLikeCount,
        newsCatregoryId
    } = isSuccess && data.detailsNewsDto

    return (
        <>
            <TitleSection title={title} >
                <BreadCrumb href={'/Blog'} text="BlogSection" />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
            <div className="main-container lg:flex lg:flex-row-reverse gap-7 my-28">
                <div className="lg:w-[915px] sm:w-full mobile:w-full mx-auto">
                    <img src={currentImageAddress} className="h-[420px] w-full rounded-xl" />
                    <DetailsSection
                        category={newsCatregoryName}
                        date={updateDate && updateDate.slice(0, 10)}
                        view={currentView}
                        studyTime={5}
                        commentsNumber={commentsCount}
                    />
                    <BlogBiography
                        title={title}
                        bio={googleDescribe}
                    />
                    <OverView_Details
                        training={miniDescribe}
                        MajorElements={["", "", "", ""]}
                        Class={"hidden"}
                        variant={'blog_event'}
                        titleLearning={'LearnBlog'}
                        ElementClass={'hidden'}
                    />
                    <div className="border-y-2 my-7 py-5">
                        <div className="flex gap-8 w-fit max-sm:m-auto">
                            <p className="text-DarkBlue">{t('blogFavorite')}</p>
                            <ToLike likeNumber={currentLikeCount} disLikeNumber={currentDissLikeCount} numberStatus="hidden" />
                        </div>
                    </div>
                    <CommentSection data={commentData} isSuccess={commentSuccess}/>
                </div>
                <RelatedBlogs category={newsCatregoryId}/>
            </div>
        </>
    )
}

export default BlogDetail