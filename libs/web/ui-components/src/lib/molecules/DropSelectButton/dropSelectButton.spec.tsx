import { fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';
import { DropSelectButton } from '.';

const TITLE = 'DropSelectButton';

function setup() {
  return customRender(<DropSelectButton title={TITLE} onClick={onClick} />);
}

describe('DropSelectButton', () => {
  it('o evento de click deveria ser chamado', () => {
    const { getById } = setup();

    fireEvent.click(getById('dropSelectButton'));

    const onClickResults = onClick.mock.results;
    expect(onClickResults).toHaveLength(1);
    expect(onClickResults[0].type).toEqual('return');
  });

  it('o texto deveria ser o mesmo que está na variável TITLE', () => {
    const { getByText } = setup();

    expect(getByText(TITLE)).toBeTruthy();
  });
});

// eslint-disable-next-line
const onClick = jest.fn(() => {});
