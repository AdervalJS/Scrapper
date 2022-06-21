import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { viewOrderSelect } from '@scrapper/shared/assets';
import { customRender } from '@scrapper/web/util-test';

import { OptionsForTest } from './select.data';
import { Select } from '.';

describe('select', () => {
  it('deveria ser possível mudar de opção', async () => {
    const nextValue = viewOrderSelect[1];

    customRender(
      <Select>
        <OptionsForTest options={viewOrderSelect} />
      </Select>
    );

    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: nextValue.label })
    );

    expect(screen.getByRole('option', { name: nextValue.label }).selected).toBe(
      true
    );
  });
});
