import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { viewOrderSelect } from '@scrapper/shared/assets';
import { customRender } from '@scrapper/web/util-test';

import { titleAndSelectState } from './titleAndSelect.test.state';
import { TitleAndSelect } from '.';

const TITLE = 'TitleAndSelect';

function setup() {
  return customRender(
    <TitleAndSelect
      state={titleAndSelectState}
      label={TITLE}
      options={viewOrderSelect}
    />
  );
}

describe('TitleAndSelect', () => {
  it('a label deveria ser igual ao título de comparação', () => {
    const { getById } = setup();

    const firstOptionLabel = viewOrderSelect[0].label;
    const secondaryOptionLabel = viewOrderSelect[1].label;
    const titleToCompare = TITLE + firstOptionLabel + secondaryOptionLabel;

    expect(getById('titleAndSelect').textContent).toEqual(titleToCompare);
  });
  it('deveria ser possível mudar de opção', () => {
    setup();

    const nextValue = viewOrderSelect[1];

    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: nextValue.label })
    );

    expect(screen.getByRole('option', { name: nextValue.label }).selected).toBe(
      true
    );
  });
});
