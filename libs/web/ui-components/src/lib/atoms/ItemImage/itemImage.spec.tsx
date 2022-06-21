import { ItemImage } from '.';
import { customRender } from '@scrapper/web/util-test';
import { manga } from '@scrapper/shared/util-test';

function setup() {
  return customRender(<ItemImage src={manga.image} alt={manga.name} />);
}

describe('itemImage', () => {
  it('deveria ter a propriedade alt', () => {
    const { container } = setup();

    expect(container.firstChild).toHaveProperty('alt', manga.name);
  });

  it('deveria ter a propriedade src', () => {
    const { container } = setup();

    expect(container.firstChild).toHaveProperty('src', manga.image);
  });
});
