import { render, fireEvent } from '@testing-library/react';
import { BannerGradientCard } from '.';

const props = {
  title: 'banner title',
  text: 'text',
  buttonText: 'click me',
};

// eslint-disable-next-line
const onClickButton = jest.fn(() => {});

function setup() {
  return render(
    <BannerGradientCard {...props} onClickButton={onClickButton} />
  );
}

describe('bannerGradientCard', () => {
  it('deveria ter um título', () => {
    const { getByText } = setup();

    expect(getByText(props.title)).toBeTruthy();
  });

  it('deveria ter uma descrição', () => {
    const { getByText } = setup();

    expect(getByText(props.text)).toBeTruthy();
  });

  it('o botão deveria ter um texto', () => {
    const { getByText } = setup();

    expect(getByText(props.buttonText)).toBeTruthy();
  });

  it('o evento de click do botão deveria ser chamado', () => {
    const { getByText } = setup();

    fireEvent.click(getByText(props.buttonText));

    const clickResults = onClickButton.mock.results;

    expect(clickResults).toHaveLength(1);
    expect(clickResults[0].type).toEqual('return');
  });
});
