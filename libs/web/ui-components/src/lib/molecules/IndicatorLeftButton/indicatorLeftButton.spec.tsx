import { fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';
import { IndicatorLeftButton } from '.';

describe('IndicatorLeftButton', () => {
  it('o evento de click deveria ser chamado', () => {
    const { getById } = customRender(<IndicatorLeftButton onClick={onClick} />);

    fireEvent.click(getById('indicatorLeftButton'));

    const onClickResults = onClick.mock.results;
    expect(onClickResults).toHaveLength(1);
    expect(onClickResults[0].type).toEqual('return');
  });
});

// eslint-disable-next-line
const onClick = jest.fn(() => {});
