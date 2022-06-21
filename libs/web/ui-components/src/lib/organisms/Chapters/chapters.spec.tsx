import { chapters } from '@scrapper/shared/util-test';
import { customRender } from '@scrapper/web/util-test';
import { Chapters } from '.';
import { SelectedIdState } from './chapters.test.state';

function setup() {
  return customRender(<Chapters data={chapters} state={SelectedIdState} />);
}

describe('Chapters', () => {
  it('deveria ter um titulo', () => {
    const { getByText } = setup();
    expect(getByText('Capítulos')).toBeTruthy();
  });

  it('todos os capítulo deveriam se renderizados', () => {
    const { getByText } = setup();

    chapters.forEach(({ name }) => {
      expect(getByText(name)).toBeTruthy();
    });
  });
});
