const RenderBlogList = ({ isLoading, skeletonData, originalData, RenderComponent, isSuccess, isError, ...props }) => {
    if (isLoading) {
        return skeletonData.map((item, index) => <RenderComponent key={index} item={item} isLoading={isLoading} {...props} />)
    }
    else if (isSuccess) {
        return originalData.map((item, index) => <RenderComponent key={index} item={item} isLoading={isLoading} {...props} />)
    } else if (isError) {
        return <h1>وبلاگی یافت نشد!</h1>
    }
}

export default RenderBlogList
