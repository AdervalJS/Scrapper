import { customRender } from '@scrapper/web/util-test';
import { links } from './header.utils';
import { Header } from '.';

const BASE_PATH = 'http://localhost';

describe('Header', () => {
  it('o logo deveria ser renderizado', () => {
    const { getById } = customRender(<Header links={links} />);

    expect(getById('logoIcon')).toBeTruthy();
  });

  it('os links deveriam ser renderizados', () => {
    const { getByText } = customRender(<Header links={links} />);

    links.forEach(({ label, url }) => {
      expect(getByText(label)).toBeTruthy();
      expect(getByText(label)).toHaveProperty('href', BASE_PATH + url);
    });
  });

  it('a molecula SEARCH deveria ser renderizada', () => {
    const { getById } = customRender(<Header links={links} />);

    expect(getById('search')).toBeTruthy();
  });
});
