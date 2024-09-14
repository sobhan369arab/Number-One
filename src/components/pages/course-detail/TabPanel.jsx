import { useTranslation } from "react-i18next"
import Details_Tabs from "./Details_Tabs"
import Tab from "./Tab";
import { OverView_Details } from "../../common";

const TabPanel = ({
    overView,
    training,
    MajorElements
}) => {
    const { i18n } = useTranslation();
    return (
        <div>
            <Details_Tabs>
                <Tab label="Overview">
                    <OverView_Details overView={overView} training={training} MajorElements={MajorElements} Class={'block'} titleLearning={'LearnCourse'} variant={"course_event"} />
                </Tab>
                <Tab label="Study program">Study program </Tab>
                <Tab label="Instructor">Instructor </Tab>
                <Tab label="User comments">User comments </Tab>
            </Details_Tabs>
        </div>
    )
}

export default TabPanel