import { customRender } from '@scrapper/web/util-test';
import { data, card, copyright } from './footer.utils';
import { Footer } from '.';

const BASE_PATH = 'http://localhost';

function setup() {
  return customRender(<Footer data={data} card={card} copyright={copyright} />);
}

describe('Footer', () => {
  it('o copyright deveria ser renderizado', () => {
    const { getByText } = setup();

    expect(getByText(copyright)).toBeTruthy();
  });

  it('o MobileCard deveria ter a label e o text fornecidos', () => {
    const { getByText } = setup();

    expect(getByText(card.label)).toBeTruthy();
    expect(getByText(card.text)).toBeTruthy();
  });

  it('os links da variável DATA deveriam ser renderizados', () => {
    const { getByText } = setup();

    data.forEach(({ title, links }) => {
      expect(getByText(title)).toBeTruthy();

      links.forEach(({ label, url }) => {
        expect(getByText(label)).toBeTruthy();
        expect(getByText(label)).toHaveProperty('href', BASE_PATH + url);
      });
    });
  });
});
