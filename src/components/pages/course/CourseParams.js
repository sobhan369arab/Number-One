export const CourseProps = ({ item, index }) => {
  //   console.log(index);
  //   const courseItem = JSON.parse(item);
  const Props = [
    {
      id: index,
      title: item.title,
      images: item.tumbImageAddress,
      instructor: item.teacherName,
      score: item.courseRate,
      category: item.technologyList,
      level: item.levelName,
      price: item.cost,
      date: item.lastUpdate,
      studentsNumber: 0,
      like: item.likeCount,
      disLike: item.dissLikeCount,
      bio: item.describe,
    },
  ];
  return Props[0];
};
