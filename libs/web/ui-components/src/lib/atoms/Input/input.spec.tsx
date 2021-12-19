import { customRender } from '@scrapper/web/util-test';
import { act, fireEvent } from '@testing-library/react';
import { InputElementForTest, placeholder } from './input.data';

describe('input', () => {
  it('deveria ter um placeholder', () => {
    const { getByPlaceholderText } = customRender(<InputElementForTest />);

    expect(getByPlaceholderText(placeholder)).toBeTruthy();
  });

  it('as mudanças no texto deveriam ser reconhecidas', () => {
    const { getByPlaceholderText, getByDisplayValue } = customRender(
      <InputElementForTest />
    );
    const inputValue = 'input';

    act(() => {
      fireEvent.focus(getByPlaceholderText(placeholder));
      fireEvent.change(getByPlaceholderText(placeholder), {
        target: { value: inputValue },
      });
    });

    expect(getByDisplayValue(inputValue)).toBeTruthy();
  });
});
