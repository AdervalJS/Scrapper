import { fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';
import { Search } from '.';

const SEARCH_VALUE = 'search item';

function fireKeyDown(element: HTMLElement, text: string) {
  const keys = [...text];

  keys.map(pressKey);

  function pressKey(key: string) {
    fireEvent.keyDown(element, { key });
  }
}

// eslint-disable-next-line
const onKeyDown = jest.fn(() => {});

function setup() {
  return customRender(<Search onKeyDown={onKeyDown} />);
}

describe('Search', () => {
  it('o número de chamadas ao keyDown deveria ser igual ao número de letras digitadas', () => {
    const { getByPlaceholderText } = setup();
    const element = getByPlaceholderText('Pesquisar');

    fireEvent.click(element);
    fireKeyDown(element, SEARCH_VALUE);

    const onKeyDownResults = onKeyDown.mock.results;
    expect(onKeyDownResults.length).toEqual(SEARCH_VALUE.length);
  });
});
