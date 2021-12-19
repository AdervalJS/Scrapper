import { customRender } from '@scrapper/web/util-test';
import { Link } from '.';

const BASE_PATH = 'http://localhost';

const PROPS = {
  path: '/routePath',
  label: 'Link',
};

function setup() {
  return customRender(<Link to={PROPS.path}>{PROPS.label}</Link>);
}

describe('Link', () => {
  it('o link deveria está com o path e a label da variável PROPS', () => {
    const { getByText, getByRole } = setup();

    expect(getByRole('link')).toHaveProperty('href', BASE_PATH + PROPS.path);
    expect(getByText(PROPS.label)).toBeTruthy();
  });
});
