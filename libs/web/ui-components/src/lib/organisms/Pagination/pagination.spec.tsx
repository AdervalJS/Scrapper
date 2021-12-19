import { fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';

import { Pagination } from '.';
import { getPages } from './pagination.utils';
import { pageSelectedState } from './pagination.test.state';

const TOTAL_PAGE = 20;
const TOTAL_VISIBLE_PAGE = 8;
const INITIAL_PAGE = 1;
const NEXT_SELECT_PAGE = TOTAL_VISIBLE_PAGE;

const pageGroup = {
  firstPages: getPages(TOTAL_PAGE, INITIAL_PAGE, TOTAL_VISIBLE_PAGE),
  secondaryPages: getPages(TOTAL_PAGE, NEXT_SELECT_PAGE, TOTAL_VISIBLE_PAGE),
};

function setup() {
  return customRender(
    <Pagination
      totalPage={TOTAL_PAGE}
      totalVisiblePage={TOTAL_VISIBLE_PAGE}
      state={pageSelectedState}
    />
  );
}

describe('pagination', () => {
  it('deveria mostra a mesma quantidade de botões que foi definido em TOTAL_VISIBLE_PAGE', async () => {
    const { findAllById } = setup();

    const buttons = await findAllById('button');

    expect(buttons.length).toEqual(TOTAL_VISIBLE_PAGE);
  });

  it('deveria mostra o mesmo grupo de paginas', async () => {
    const { findAllById } = setup();

    const getPageNumber = (e: HTMLElement) => Number(e.textContent);

    const firstPages = await findAllById('button');
    expect(firstPages.map(getPageNumber)).toEqual(pageGroup.firstPages);

    fireEvent.click(firstPages[NEXT_SELECT_PAGE - 1]);

    const secondaryPages = await findAllById('button');
    expect(secondaryPages.map(getPageNumber)).toEqual(pageGroup.secondaryPages);
  });
});
