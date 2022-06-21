import { mangas } from '@scrapper/shared/util-test';
import { customRender } from '@scrapper/web/util-test';

import { BannerList } from '.';

function setup() {
  return customRender(<BannerList data={mangas} />);
}

describe('BannerList', () => {
  it('a quantidade de items deveria ser igual a quantidade de mangas', () => {
    const { getAllById } = setup();

    expect(getAllById('banner').length).toEqual(mangas.length);
  });
});
