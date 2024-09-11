import { useState } from "react";
import { FilterSide_Blogs } from "../../components/pages/blog"
import TitleSection from "../../components/partials/title-section/TitleSection"

const Blog = () => {
  const [Query, setQuery] = useState(undefined);
  const [categoryData, SetCategoryData] = useState(null);

  const filterObj_Blogs = {
    Query: Query,
    ListCategory: categoryData,
  };
  console.log(filterObj_Blogs)

  return (
    <>
      <TitleSection title={'BlogSection'} />
      <div className="main-container flex gap-7 relative">
        <FilterSide_Blogs setQuery={setQuery} SetCategoryData={SetCategoryData} />
      </div>
    </>
  )
}

export default Blog