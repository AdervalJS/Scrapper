import { customRender } from '@scrapper/web/util-test';
import { GradientButton } from '.';

describe('gradientButton', () => {
  it('deveria renderizar com sucesso', () => {
    const { baseElement } = customRender(<GradientButton />);
    expect(baseElement).toBeTruthy();
  });
});
