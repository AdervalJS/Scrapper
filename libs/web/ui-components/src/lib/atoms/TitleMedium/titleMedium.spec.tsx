import { customRender } from '@scrapper/web/util-test';
import { TitleMedium } from '.';

describe('titleMedium', () => {
  it('deveria ter um título', () => {
    const label = 'Test TitleMedium';

    const { getByText } = customRender(<TitleMedium>{label}</TitleMedium>);

    expect(getByText(label)).toBeTruthy();
  });
});
