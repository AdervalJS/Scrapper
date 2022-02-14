import { Page as PageInterface } from '@scrapper/shared/util-interfaces';
import { useRef, WheelEvent } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { Page } from '../../atoms/Page';

import { Container, ContainerProps } from './pagesList.styles';

export type PagesListState = boolean;

export interface PagesListProps
  extends Omit<
    ContainerProps,
    'isFocused' | 'timeTransition' | 'adjustPosition'
  > {
  data: PageInterface[];
  state: RecoilState<PagesListState>;
}

const TIME_TRANSITION = 500;

export const PagesList: React.FC<PagesListProps> = ({
  data,
  state,
  ...rest
}) => {
  const pagesRef = useRef<HTMLElement | null>(null);
  const [focus, setFocus] = useRecoilState(state);

  function handleReading(index: number) {
    setTimeout(() => {
      scrollToIndex(index);
    }, TIME_TRANSITION + 20);

    setFocus(!focus);
  }

  function scrollToIndex(index: number) {
    if (pagesRef?.current) {
      const { scrollWidth } = pagesRef.current.firstElementChild as Element;
      const left = scrollWidth * index;

      pagesRef.current.scroll({ left, behavior: 'smooth' });
    }
  }

  function wheel({ deltaY, deltaX }: WheelEvent<HTMLElement>) {
    if (!pagesRef.current) return;
    if (deltaX !== 0) return;

    pagesRef.current.scrollLeft += deltaY * 0.4;
  }

  return (
    <Container
      ref={(r) => (pagesRef.current = r)}
      timeTransition={TIME_TRANSITION + 'ms'}
      isFocused={focus}
      onWheel={wheel}
      {...rest}
    >
      {data.map(({ pageNumber, url, id }, index) => (
        <Page
          onClick={() => handleReading(index)}
          key={id}
          src={url}
          isCompacted={focus}
          alt={'page' + pageNumber}
        />
      ))}
    </Container>
  );
};
