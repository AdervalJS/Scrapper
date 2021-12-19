import { fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';
import { DropSelectOption, DropSelectOptionProps } from '.';

const option = {
  value: 1,
  label: 'test',
};

function setup(props?: Omit<DropSelectOptionProps, 'option' | 'theme'>) {
  return customRender(<DropSelectOption option={option} {...props} />);
}

describe('dropSelectOption', () => {
  it('devira ter a label da opção fornecida', () => {
    const { getByText } = setup();

    const element = getByText(option.label);

    expect(element).toBeTruthy();
  });

  it('os eventos onClick e onPick deveriam ser chamados', () => {
    const { getById } = setup({ onPick: onPick, onClick: onClick });

    fireEvent.click(getById('dropSelectOption'));

    const clickResults = onClick.mock.results;
    expect(clickResults).toHaveLength(1);
    expect(clickResults[0].type).toEqual('return');

    const pickResults = onPick.mock.results;
    expect(pickResults).toHaveLength(1);
    expect(onPick.mock.results[0].type).toEqual('return');
  });
});

const onPick = jest.fn((e) => {
  expect(e).toEqual(option);
});
// eslint-disable-next-line
const onClick = jest.fn(() => {});
