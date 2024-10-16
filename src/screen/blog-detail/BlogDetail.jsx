import { useParams } from "react-router-dom"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { BlogBiography, DetailsSection } from "../../components/pages/blog-detail";
import OverView_Details from "../../components/common/OverView_Details";
import { useTranslation } from "react-i18next";
import { CommentSection, FeedbackSection, RelatedItems, ToLike } from "../../components/common";
import BreadCrumb from "../../components/partials/title-section/BreadCrumb";
import { useQuery } from "@tanstack/react-query";
import GetBlogWithId from "../../core/services/api/GetData/GetBlogWithId";
import GetNewsComments from "../../core/services/api/GetData/GetNewsComments";
import { GetNewsFilterPage } from "../../core/services/api/GetData";
import { BlogCard } from "../../components/pages/blog";

const BlogDetail = () => {
    const { t } = useTranslation();
    const { id } = useParams();

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
    console.log(newsCatregoryId)

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
                  {/* <FeedbackSection/> */}

                    <CommentSection data={commentData} isSuccess={commentSuccess} />
                </div>
                <RelatedItems 
                category={newsCatregoryId} 
                params={{ newsCatregoryId: newsCatregoryId }}  
                apiFunction={GetNewsFilterPage}
                variant={'news'}
                RenderItem={BlogCard}
                />
            </div>
        </>
    )
}

export default BlogDetail