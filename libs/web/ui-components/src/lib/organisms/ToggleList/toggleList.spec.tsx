import { fireEvent } from '@testing-library/dom';
import { customRender, mangas } from '@scrapper/web/util-test';
import { light, viewOrderSelect } from '@scrapper/shared/assets';

import { ToggleList } from '.';
import { TitleAndSelect } from '../../molecules/TitleAndSelect';
import { titleAndSelectState } from '../../molecules/TitleAndSelect/titleAndSelect.test.state';

const onItemClick = jest.fn((e) => {
  expect(e).toEqual(mangas[0]);
});

function setup(header?: boolean) {
  const Header = (
    <TitleAndSelect
      state={titleAndSelectState}
      label="header label"
      options={viewOrderSelect}
      theme={light}
    />
  );

  return customRender(
    <ToggleList
      onItemClick={onItemClick}
      data={mangas}
      header={header ? Header : undefined}
    />
  );
}

describe('toggleList', () => {
  it('should be of the same length and execute the call to onItemClick', () => {
    const { getAllById, getById } = setup();

    fireEvent.click(getById('itemCompactedButton'));

    const elements = getAllById('itemCompacted');

    expect(elements.length).toEqual(mangas.length);

    fireEvent.click(elements[0]);
  });

  it('should be of the same length and execute the call to onItemClick', () => {
    const { getAllById, getById } = setup();

    fireEvent.click(getById('itemSimpleButton'));

    const elements = getAllById('itemSimple');

    expect(elements.length).toEqual(mangas.length);

    fireEvent.click(elements[0]);
  });

  it('should render header', () => {
    const { getById } = setup(true);

    expect(getById('titleAndSelect')).toBeTruthy();
  });
});
