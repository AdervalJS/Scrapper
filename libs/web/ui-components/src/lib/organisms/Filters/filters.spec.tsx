import { customRender } from '@scrapper/web/util-test';
import { Filters } from '.';
import { FiltersContainerProps } from './filters.interfaces';
import { data } from './filters.util';

function setup(props?: FiltersContainerProps) {
  return customRender(<Filters data={data} {...props} />);
}

describe('Filters', () => {
  it('o número de elementos e de seleções deveria ser iguais', () => {
    const { getAllById } = setup();

    const elements = getAllById('dropSelect');

    expect(elements).toHaveLength(data.length);
  });

  it('deveria renderizar um botão', () => {
    const value = 'save filters';
    const children = <button>{value}</button>;

    const { getByText } = setup({ children });

    expect(getByText(value)).toBeTruthy();
  });
});
