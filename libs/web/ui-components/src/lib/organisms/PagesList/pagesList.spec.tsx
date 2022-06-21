import { customRender } from '@scrapper/web/util-test';
import { pages } from '@scrapper/shared/util-test';
import { PagesList } from '.';
import { PagesListFocus } from './pagesList.test.state';

function setup() {
  return customRender(<PagesList data={pages} state={PagesListFocus} />);
}

describe('PagesList', () => {
  it('todas as paginas do capítulo deveriam se renderizadas', () => {
    const { getAllByRole } = setup();
    const elements = getAllByRole('img');

    expect(elements).toHaveLength(pages.length);

    elements.forEach((e, index) => {
      const { url } = pages[index];
      expect(e.getAttribute('src')).toEqual(url);
    });
  });
});
