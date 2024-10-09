import NotFound_Pic from "./NotFound_Pic"

const RenderItemsList = ({ isLoading, skeletonData, originalData, RenderComponent, isSuccess, isError, notFoundText, refetchData, ...props }) => {
    if (isLoading) {
        return skeletonData.map((item, index) => <RenderComponent key={index} item={item} isLoading={isLoading} {...props} />)
    }
    else if (originalData?.length == 0) {
        return <NotFound_Pic text={notFoundText} />
    }
    else if (isSuccess) {
        return originalData?.map((item, index) => <RenderComponent key={index} item={item} isLoading={isLoading} refetch={refetchData} {...props} />)
    } else if (isError) {
        return <NotFound_Pic text={notFoundText} />
    }
}

export default RenderItemsList
