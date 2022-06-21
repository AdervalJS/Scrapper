import { customRender } from '@scrapper/web/util-test';
import { fireEvent } from '@testing-library/react';
import { GradientButtonArrowUp } from '.';

describe('GradientButtonArrowUp', () => {
  it('o evento de click deveria ser chamado', () => {
    const { getById } = customRender(
      <GradientButtonArrowUp onClick={onClick} />
    );

    fireEvent.click(getById('gradientButtonArrowUp'));

    const onClickResults = onClick.mock.results;
    expect(onClickResults).toHaveLength(1);
    expect(onClickResults[0].type).toEqual('return');
  });
});

// eslint-disable-next-line
const onClick = jest.fn(() => {});
