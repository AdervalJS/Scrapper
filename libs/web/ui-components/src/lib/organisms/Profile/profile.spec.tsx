import { mangaProfile } from '@scrapper/shared/util-test';
import { customRender } from '@scrapper/web/util-test';
import { fireEvent } from '@testing-library/react';
import { Profile, ProfileProps } from '.';

const DATA = mangaProfile[0];

function setUp(props: Partial<ProfileProps>) {
  return customRender(<Profile {...props} data={DATA} />);
}

// eslint-disable-next-line
const onClose = jest.fn(() => {});

// eslint-disable-next-line
const authorItemClick = jest.fn((e) => {
  expect(e).toEqual(DATA.moreAuthor[0]);
});

const relationItemClick = jest.fn((e) => {
  expect(e).toEqual(DATA.relation[0]);
});

describe('Profile', () => {
  it('o evento Close deveria ser chamado', () => {
    const { getAllByRole } = setUp({ onClose });

    const closeButtonElement = getAllByRole('button')[0];

    fireEvent.click(closeButtonElement);

    const onClickResults = onClose.mock.results;
    expect(onClickResults).toHaveLength(1);
    expect(onClickResults[0].type).toEqual('return');
  });

  it('o evento authorItemClick deveria ser chamado', () => {
    const { getAllById } = setUp({ authorItemClick });

    const element = getAllById('itemSimple')[0];
    fireEvent.click(element);

    const authorItemClickResults = authorItemClick.mock.results;
    expect(authorItemClickResults).toHaveLength(1);
    expect(authorItemClickResults[0].type).toEqual('return');
  });

  it('o evento relationItemClick deveria ser chamado', () => {
    const { getAllById } = setUp({ relationItemClick });

    const element = getAllById('itemCompacted')[0];
    fireEvent.click(element);

    const relationItemClickResults = relationItemClick.mock.results;
    expect(relationItemClickResults).toHaveLength(1);
    expect(relationItemClickResults[0].type).toEqual('return');
  });
});
