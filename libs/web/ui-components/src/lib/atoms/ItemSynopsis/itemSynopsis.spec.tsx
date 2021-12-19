import { customRender } from '@scrapper/web/util-test';
import { ItemSynopsis } from '.';

describe('itemSynopsis', () => {
  it('deveria ter um texto', () => {
    const label = 'ItemSynopsis test';
    const { getByText } = customRender(<ItemSynopsis>{label}</ItemSynopsis>);

    expect(getByText(label)).toBeTruthy();
  });
});
