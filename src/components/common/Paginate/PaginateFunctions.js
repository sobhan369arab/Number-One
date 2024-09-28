export const handlePageClick = (event, numberOfItem, setItemOffset, data) => {
  const newOffset = (event.selected * numberOfItem) % data.length;
  setItemOffset(newOffset);
};

export const calculatePageCount = (data, numberOfItem) => {
  if (data.length <= numberOfItem) return;

  const pageCount = Math.ceil(data.length / numberOfItem);
  return pageCount;
};
