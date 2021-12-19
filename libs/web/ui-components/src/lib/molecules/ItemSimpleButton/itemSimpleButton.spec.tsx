import { fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';
import { ItemSimpleButton } from '.';

describe('ItemSimpleButton', () => {
  it('o evento de click deveria ser chamado', () => {
    const { getById } = customRender(<ItemSimpleButton onClick={onClick} />);

    fireEvent.click(getById('itemSimpleButton'));

    const onClickResults = onClick.mock.results;
    expect(onClickResults).toHaveLength(1);
    expect(onClickResults[0].type).toEqual('return');
  });
});

// eslint-disable-next-line
const onClick = jest.fn(() => {});
