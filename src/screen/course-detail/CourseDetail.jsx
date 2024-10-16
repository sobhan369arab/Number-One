import { useParams } from "react-router-dom"
import TitleSection from "../../components/partials/title-section/TitleSection";
import { DetailsBox, RelatedItems, Title_details } from "../../components/common";
import { LevelIcon } from "../../core/icon";
import { TabPanel } from "../../components/pages/course-detail";
import MediaQuery from "react-responsive";
import BreadCrumb from "../../components/partials/title-section/BreadCrumb";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetAllCourseByPagination, GetCourseDetails, GetCoursesComments, GetTechnologies } from "../../core/services/api/GetData";
import NotFoundImg from "../../assets/images/image-not-found.png"
import ChangeMoment from "../../core/utility/moment/ChangeMoment";
import { FaHourglassStart, FaUsers } from "react-icons/fa6";
import { SiStatuspage } from "react-icons/si";
import { FaRegIdCard } from "react-icons/fa";
import Course from "../../components/pages/course/Course";
import { AddCourseFavorite, AddCourseReserve } from "../../core/services/api/PostData";

const CourseDetail = () => {
    const { id } = useParams();
    const { data: courseDetails, isSuccess, refetch } = useQuery({
        queryKey: ['GET_COURSE_DETAILS'],
        queryFn: async () => {
            return await GetCourseDetails(id);
        }
    })

    // Add Course in the Favorite List
    const { mutate: addFavorite } = useMutation({
        mutationKey: ["ADD_COURSE_FAVORITE"],
        mutationFn: (id) => { return AddCourseFavorite(id) },
        onSuccess: () => { refetch() }
    })
    const {
        courseId, title, imageAddress, courseLevelName, startTime, endTime, capacity, currentRegistrants, courseStatusName,
        teacherName, currentRate, techs, cost, describe, miniDescribe, isCourseReseve, userLikeId, likeCount, dissLikeCount,
        currentUserLike, currentUserDissLike, isUserFavorite,
    } = isSuccess && courseDetails

    // to like params
    const Params = {
        variant: 'courseDetails',
        userLikeId: userLikeId,
        likeNumber: likeCount,
        disLikeNumber: dissLikeCount,
        LikeStatus: currentUserLike,
        DissLikeStatus: currentUserDissLike,
        Id: id,
        refetch: refetch,
        userFavorite: isUserFavorite,
        action: addFavorite,
    }

    const startT = ChangeMoment(startTime?.split("T"));
    const endT = ChangeMoment(endTime?.split("T"));

    const DetailsCourse = [
        { titleDetail: "level", countDetail: courseLevelName, iconDetail: <LevelIcon /> },
        { titleDetail: "startTime", countDetail: endT, iconDetail: <FaHourglassStart color="gray" /> },
        { titleDetail: "endTime", countDetail: startT, iconDetail: <FaHourglassStart className="rotate-180" color="gray" /> },
        { titleDetail: "capacity", countDetail: capacity, iconDetail: <FaUsers color="gray" /> },
        { titleDetail: "Registrants", countDetail: currentRegistrants, iconDetail: <FaRegIdCard color="gray" /> },
        { titleDetail: "statusCourse", countDetail: courseStatusName, iconDetail: <SiStatuspage color="gray" /> }
    ]
    // Handling the image data sent from the api
    const handleImg = () => {
        if (imageAddress == null || imageAddress === 'testimg') return NotFoundImg
        else return imageAddress
    }

    // Comment call api with react Query
    const { data: commentData, isSuccess: commentSuccess, refetch: refetchComment } = useQuery({
        queryKey: ['GET_COMMENTS_COURSE'],
        queryFn: () => { return GetCoursesComments(id) }
    })
    // if(commentSuccess){
    const { data: teachData } = useQuery({
        queryKey: ['GET_TECHNOLOGIES'],
        queryFn: () => { return GetTechnologies() }
    })

    // Add Course Reserve in The Basket 
    const { mutate } = useMutation({
        mutationKey: ["ADD_COURSE_RESERVE"],
        mutationFn: () => { return AddCourseReserve(courseId) }
    })

    // Course Reserve Params
    const params = { actionReserve: mutate, reserveStatus: isCourseReseve }
    const detailsBox = <DetailsBox
        variant="course-detail"
        price={cost}
        Detail={DetailsCourse}
        arrowColor={"#000"}
        colorButton={"yellow"}
        btnText={"signUpCourse"}
        {...params}
    />

    // Find related courses based on technology
    const listTech = [];
    if (techs) {
        for (const element of techs) {
            const teachObj = teachData?.find(tech => tech.techName == element);
            listTech.push(teachObj?.id);
        }
    }

    return (
        <>
            <TitleSection title={title}>
                <BreadCrumb href={'/courses'} text={'CoursesTitle'} />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
            <div className="main-container lg:flex flex-row-reverse gap-6 px-1">
                <div className="lg:w-3/4  mx-auto sm:w-full">
                    <img src={handleImg()} alt="course-img" className='w-full h-96 rounded-xl' />
                    <Title_details
                        title={title}
                        creator={teacherName}
                        NumberStudents={currentRegistrants}
                        Score={currentRate}
                        category={techs}
                        differentDetail={startT}
                        variant={"course-detail"}
                    />
                    <MediaQuery maxWidth={'1024px'}>
                        {detailsBox}
                    </MediaQuery>
                    <TabPanel
                        overView={describe}
                        training={miniDescribe}
                        MajorElements={["", "", "", ""]}
                        commentData={commentData}
                        commentSuccess={commentSuccess}
                        Id={id}
                        refetch={refetchComment}
                        variant={'course'}
                        params={Params}
                    />
                    <RelatedItems
                        category={techs}
                        params={listTech?.length > 0 && { TechCount: 1, ListTech: listTech.toString() }}
                        apiFunction={GetAllCourseByPagination}
                        variant={'courseFilterDtos'}
                        RenderItem={Course}
                    />
                </div>
                <MediaQuery minWidth={'1024px'}>
                    {detailsBox}
                </MediaQuery>
            </div>
        </>
    )
}

export default CourseDetail