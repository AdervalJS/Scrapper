import { customRender } from '@scrapper/web/util-test';
import { Text } from '.';

describe('text', () => {
  it('deveria ter um texto', () => {
    const label = 'Text Test';
    const { getByText } = customRender(<Text>{label}</Text>);

    expect(getByText(label)).toBeTruthy();
  });
});
