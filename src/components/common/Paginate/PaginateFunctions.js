export const handlePageClick = (event, numberOfItem, setItemOffset, data) => {
  const newOffset = (event.selected * numberOfItem) % data.length;
  console.log(newOffset);
  setItemOffset(newOffset);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const calculatePageCount = (data, numberOfItem) => {
  if (data.length <= numberOfItem) return;

  const pageCount = Math.ceil(data.length / numberOfItem);
  return pageCount;
};
