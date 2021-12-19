import { customRender } from '@scrapper/web/util-test';
import { GradientCard } from '.';

describe('gradientCard', () => {
  it('deveria renderizar com sucesso', () => {
    const { baseElement } = customRender(<GradientCard />);
    expect(baseElement).toBeTruthy();
  });
});
