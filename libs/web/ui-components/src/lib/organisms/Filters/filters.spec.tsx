import { customRender } from '@scrapper/web/util-test';
import { Filters, FiltersProps } from '.';
import { data } from './filters.util';

function setup(props?: Partial<FiltersProps>) {
  return customRender(<Filters data={data} {...props} />);
}

describe('Filters', () => {
  it('o número de elementos e de seleções deveria ser iguais', () => {
    const { getAllById } = setup();

    const elements = getAllById('dropSelect');

    expect(elements).toHaveLength(data.length);
  });

  it('deveria renderizar um botão', () => {
    const label = 'save filters';

    const { getByText } = setup({ extraButton: {
       label
    } });

    expect(getByText(label)).toBeTruthy();
  });
});
