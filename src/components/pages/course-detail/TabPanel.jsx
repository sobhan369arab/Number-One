import Details_Tabs from "./Details_Tabs"
import Tab from "./Tab";
import { CommentSection, OverView_Details } from "../../common";
import { AddCourseComment, AddReplyCourseComment } from "../../../core/services/api/PostData";

const TabPanel = ({
    overView,
    training,
    MajorElements,
    commentData,
    commentSuccess,
    Id,
    refetch,
    variant
}) => {
    return (
        <div>
            <Details_Tabs>
                <Tab label="Overview">
                    <OverView_Details overView={overView} training={training} MajorElements={MajorElements} Class={'block'} ElementClass={'hidden'} titleOverView={'CourseOverView'} titleLearning={'LearnCourse'} variant={"course"} />
                </Tab>
                <Tab label="Study program">Study program </Tab>
                <Tab label="User comments"><CommentSection Id={Id} variant={variant} replayComment={AddReplyCourseComment} apiFunction={AddCourseComment} data={commentData} isSuccess={commentSuccess} refetch={refetch}/></Tab>
            </Details_Tabs>
        </div>
    )
}

export default TabPanel