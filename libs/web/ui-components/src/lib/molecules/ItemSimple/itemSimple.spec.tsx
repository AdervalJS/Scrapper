import { fireEvent } from '@testing-library/react';
import { ItemSimple } from '.';
import { customRender } from '@scrapper/web/util-test';
import { baseManga } from '@scrapper/shared/util-test';

function setup() {
  return customRender(
    <ItemSimple onClick={onClick} onPick={onPick} data={baseManga} />
  );
}

describe('ItemSimple', () => {
  it('deveria ter a imagem do manga', () => {
    const { getByRole } = setup();

    expect(getByRole('img')).toHaveProperty('src', baseManga.image);
  });

  it('deveria ter o nome do manga', () => {
    const { getByText } = setup();

    expect(getByText(baseManga.name)).toBeTruthy();
  });

  it('os eventos onClick e onPick deveriam ser chamados', () => {
    const { getById } = setup();

    fireEvent.click(getById('itemSimple'));

    const onClickResults = onClick.mock.results;
    expect(onClickResults).toHaveLength(1);
    expect(onClickResults[0].type).toEqual('return');

    const onPickResults = onPick.mock.results;
    expect(onPickResults).toHaveLength(1);
    expect(onPickResults[0].type).toEqual('return');
  });
});

// eslint-disable-next-line
const onClick = jest.fn(() => {});

const onPick = jest.fn((e) => {
  expect(e).toEqual(baseManga);
});
