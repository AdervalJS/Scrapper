import { fireEvent } from '@testing-library/dom';
import { customRender } from '@scrapper/web/util-test';
import { viewOrderSelect } from '@scrapper/shared/assets';
import { dropSelectState } from './dropSelect.test.state';
import { DropSelect, DropSelectProps } from '.';

function setup(
  props?: Omit<DropSelectProps, 'theme' | 'title' | 'options' | 'state'>
) {
  return customRender(
    <DropSelect
      title="title"
      options={viewOrderSelect}
      state={dropSelectState}
      {...props}
    />
  );
}

describe('dropSelect', () => {
  it('o número de elementos e opções deveriam ser iguais', () => {
    const { getAllById } = setup();

    expect(getAllById('dropSelectOption')).toHaveLength(viewOrderSelect.length);
  });

  it('a opção selecionada deveria ser removida', () => {
    const { getAllById } = setup();

    const element = getAllById('dropSelectOption')[0] as HTMLOptionElement;

    fireEvent.click(element);
    expect(element.selected).toEqual(true);

    fireEvent.click(element);
    expect(element.selected).toEqual(false);
  });

  it('deveria manter apenas uma opção selecionada', () => {
    const { getAllById } = setup({ enableToggle: true });

    const firstElement = getAllById('dropSelectOption')[0] as HTMLOptionElement;
    fireEvent.click(firstElement);
    expect(firstElement.selected).toEqual(true);

    const secondaryElement = getAllById(
      'dropSelectOption'
    )[1] as HTMLOptionElement;
    fireEvent.click(secondaryElement);
    expect(secondaryElement.selected).toEqual(true);

    expect(firstElement.selected).toEqual(false);
  });

  it('o valor da segunda opção deveria esta como padrão', () => {
    const { getAllById } = setup({
      defaultSelecteds: [viewOrderSelect[1].value],
    });

    const secondaryElement = getAllById(
      'dropSelectOption'
    )[1] as HTMLOptionElement;

    expect(secondaryElement.selected).toEqual(true);
  });
});
