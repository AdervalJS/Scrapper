import { fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';
import { CloseButton } from '.';

describe('CloseButton', () => {
  it('o evento de click deveria ser chamado', () => {
    const { getByRole } = customRender(<CloseButton onClick={onClick} />);

    fireEvent.click(getByRole('button'));

    const onClickResults = onClick.mock.results;
    expect(onClickResults).toHaveLength(1);
    expect(onClickResults[0].type).toEqual('return');
  });
});

// eslint-disable-next-line
const onClick = jest.fn(() => {});
