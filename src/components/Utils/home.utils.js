function getNoOfPage(items, itemPerPage) {
  let page = items / itemPerPage;
  page = Math.floor(page);
  if (items % itemPerPage !== 0) {
    page++;
  }
  return page;
}

function getPagesFromPage(data, currentPage, noOfEelementsPerPage) {
  return data.slice(
    (currentPage - 1) * noOfEelementsPerPage,
    currentPage * noOfEelementsPerPage
  );
}
export { getNoOfPage, getPagesFromPage };
