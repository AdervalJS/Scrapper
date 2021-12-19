import { customRender } from '@scrapper/web/util-test';
import { ItemName } from '.';

describe('itemName', () => {
  it('deveria ter um texto', () => {
    const label = 'Test ItemName';

    const { getByText } = customRender(<ItemName>{label}</ItemName>);

    expect(getByText(label)).toBeTruthy();
  });
});
