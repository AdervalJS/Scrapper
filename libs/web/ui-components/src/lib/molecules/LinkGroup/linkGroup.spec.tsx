import { customRender } from '@scrapper/web/util-test';
import { data } from './linkGroup.utils';
import { LinkGroup } from '.';

const BASE_PATH = 'http://localhost';

describe('LinkGroup', () => {
  it('deveria ter um titulo', () => {
    const { getByText } = customRender(<LinkGroup data={data} />);
    const title = data.title as string;

    expect(getByText(title)).toBeTruthy();
  });

  it('os links da variável DATA deveriam ser renderizados', () => {
    const { getByText } = customRender(<LinkGroup data={data} />);

    data.links.forEach(({ label, url }) => {
      expect(getByText(label)).toBeTruthy();
      expect(getByText(label)).toHaveProperty('href', BASE_PATH + url);
    });
  });
});
