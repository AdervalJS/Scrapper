import { BlurryImage } from '.';
import { customRender, manga } from '@scrapper/web/util-test';

function setup() {
  return customRender(
    <BlurryImage data={{ imageUrl: manga.image, alt: manga.name }} />
  );
}

describe('blurryImage', () => {
  it('deveria ter uma imagem', () => {
    const { getByAltText } = setup();

    expect(getByAltText(manga.name)).toHaveProperty('src', manga.image);
  });
});
