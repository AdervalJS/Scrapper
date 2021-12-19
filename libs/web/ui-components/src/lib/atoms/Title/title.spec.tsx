import { customRender } from '@scrapper/web/util-test';
import { Title } from '.';

describe('title', () => {
  it('deveria ter um título', () => {
    const label = 'Test Title';

    const { getByText } = customRender(<Title>{label}</Title>);

    expect(getByText(label)).toBeTruthy();
  });
});
