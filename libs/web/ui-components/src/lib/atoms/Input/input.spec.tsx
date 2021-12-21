import { ChangeEvent, useState } from 'react';
import { customRender } from '@scrapper/web/util-test';
import { act, fireEvent } from '@testing-library/react';

import { Input } from '.';

export const PLACEHOLDER = 'search';

export function InputElementForTest() {
  const [value, setValue] = useState('');

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    setValue(ev.target.value);
  };

  return (
    <Input value={value} placeholder={PLACEHOLDER} onChange={handleChange} />
  );
}

describe('input', () => {
  it('deveria ter um placeholder', () => {
    const { getByPlaceholderText } = customRender(<InputElementForTest />);

    expect(getByPlaceholderText(PLACEHOLDER)).toBeTruthy();
  });

  it('as mudanças no texto deveriam ser reconhecidas', () => {
    const { getByPlaceholderText, getByDisplayValue } = customRender(
      <InputElementForTest />
    );
    const inputValue = 'input';

    act(() => {
      fireEvent.focus(getByPlaceholderText(PLACEHOLDER));
      fireEvent.change(getByPlaceholderText(PLACEHOLDER), {
        target: { value: inputValue },
      });
    });

    expect(getByDisplayValue(inputValue)).toBeTruthy();
  });
});
