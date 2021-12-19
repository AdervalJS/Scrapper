import { customRender } from '@scrapper/web/util-test';
import { TitleShadow } from '.';

describe('titleShadow', () => {
  it('devira ter um título', () => {
    const label = 'Test TitleShadow';

    const { getByText } = customRender(<TitleShadow>{label}</TitleShadow>);

    expect(getByText(label)).toBeTruthy();
  });
});
