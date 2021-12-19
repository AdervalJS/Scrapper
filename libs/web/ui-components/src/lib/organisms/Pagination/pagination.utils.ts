export function getPages(
  totalPage: number,
  selected: number,
  totalVisiblePage: number
) {
  const divide = Math.trunc(totalVisiblePage / 2);
  const newPages: number[] = [];

  let sliceToLeft = selected - divide;
  let sliceToRight = selected + divide;

  if (sliceToLeft < 1) {
    sliceToRight = sliceToRight + Math.abs(sliceToLeft);
    sliceToLeft = 1;
  }

  if (sliceToRight > totalPage) {
    sliceToRight = totalPage;
  }

  for (let index = sliceToLeft; index <= selected; index++) {
    newPages.push(index);
  }

  for (let index = selected + 1; index <= sliceToRight; index++) {
    newPages.push(index);
  }

  if (newPages.length > totalVisiblePage) {
    newPages.shift();
  }

  return newPages;
}
