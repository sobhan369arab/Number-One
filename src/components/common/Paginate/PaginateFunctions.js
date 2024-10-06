export const handlePageClick = (event, numberOfItem, setItemOffset, data) => {
  console.log(event)
  const newOffset = (event.selected * numberOfItem) % data;
  setItemOffset(newOffset);
};

export const calculatePageCount = (dataLength, numberOfItem) => {
  const pageCount = Math.ceil(dataLength / numberOfItem);
  return pageCount;
};
