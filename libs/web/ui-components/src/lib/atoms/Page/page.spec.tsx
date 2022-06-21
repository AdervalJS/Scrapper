import { Page, PageProps } from '.';
import { pages } from '@scrapper/shared/util-test';
import { render } from '@testing-library/react';

const PAGE = pages[0];

function setup(props: PageProps) {
  return render(
    <Page {...props} src={PAGE.url} alt={PAGE.pageNumber.toString()} />
  );
}

describe('Page', () => {
  it('deveria ter a propriedade alt', () => {
    const { container } = setup({ isCompacted: true });

    expect(container.firstChild).toHaveProperty(
      'alt',
      PAGE.pageNumber.toString()
    );
  });

  it('deveria ter a propriedade src', () => {
    const { container } = setup({ isCompacted: true });

    expect(container.firstChild).toHaveProperty('src', PAGE.url);
  });
});
