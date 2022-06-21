import React, { useState, useRef, useEffect } from 'react';
import { Title } from '../../atoms/Title';
import { IndicatorLeftButton } from '../../molecules/IndicatorLeftButton';
import { IndicatorRightButton } from '../../molecules/IndicatorRightButton';

import {
  Container,
  ContainerProps,
  Content,
  Controllers,
  Wrapper,
} from './list.styles';

export type Item = {
  id: string;
  def: number;
};

export interface ListProps extends ContainerProps {
  autoScrollTime?: number;
  title?: string;
  disableControllers?: boolean;
}

export const List: React.FC<ListProps> = ({
  children,
  autoScrollTime,
  title,
  theme,
  disableControllers = false,
  ...rest
}) => {
  const listRef = useRef<HTMLElement | null>(null);
  const [initialPositionTime, setInitialPositionTime] =
    useState<NodeJS.Timeout | null>(null);
  const [scrollRightTime, setScrollRightTime] = useState<NodeJS.Timeout | null>(
    null
  );
  const [enableLeftButton, setEnableLeftButton] = useState(false);
  const [enableRightButton, setEnableRightButton] = useState(false);
  const [itemInfo, setItemInfo] = useState<Item>({ id: '', def: 0 });
  const [scrolling, setScrolling] = useState(false);

  useEffect(getChildrenIdAndDef, [listRef.current?.children]);
  useEffect(() => handleButton(0), []); // eslint-disable-line

  useEffect(() => {
    if (scrolling) {
      timeToEnableScroll();
    } else {
      startAutoScroll();
    }
  }, [scrolling]); //eslint-disable-line

  function onScroll(e: React.UIEvent<HTMLElement, globalThis.UIEvent>) {
    const { scrollLeft } = e.currentTarget;

    stopAutoScroll();
    setScrolling(true);

    handleButton(scrollLeft);
  }

  function timeToEnableScroll() {
    setTimeout(() => {
      setScrolling(false);
    }, 700);
  }

  function startAutoScroll() {
    if (!autoScrollTime) return;

    if (enableRightButton) {
      startScrollRightTimeInterval();
    } else {
      startInitialPositionTimeout();
    }
  }

  function stopAutoScroll() {
    stopInitialPositionTimeout();
    stopScrollRightTimeInterval();
  }

  function handleButton(scrollLeft: number) {
    if (!listRef.current) return;
    const { clientWidth, offsetWidth, scrollWidth } = listRef.current;

    const def = offsetWidth - clientWidth + itemInfo.def;

    if (scrollLeft - def <= 0) {
      setEnableLeftButton(false);
    } else if (scrollLeft - def > 0) {
      setEnableLeftButton(true);
    }

    if (scrollLeft >= scrollWidth - offsetWidth) {
      setEnableRightButton(false);
    } else if (scrollLeft + def < scrollWidth - offsetWidth) {
      setEnableRightButton(true);
    }
  }

  function getChildrenIdAndDef() {
    if (!listRef.current) return;

    const id = String(listRef.current.children.item(0)?.id);
    const children = document.getElementById(id);

    const clientWidth = children?.clientWidth ? children.clientWidth : 0;
    const offsetWidth = children?.offsetWidth ? children.offsetWidth : 0;

    const def = offsetWidth - clientWidth;

    setItemInfo({ id, def });
  }

  function handleNext() {
    if (!listRef.current) return;

    listRef.current.scrollLeft += listRef.current.offsetWidth;
  }

  function handleBack() {
    if (!listRef.current) return;

    listRef.current.scrollLeft -= listRef.current.offsetWidth;
  }

  function initialPosition() {
    if (!listRef.current) return;

    listRef.current.scrollLeft = 0;
  }

  function startScrollRightTimeInterval() {
    if (!autoScrollTime) return;
    stopScrollRightTimeInterval();

    const scrollRightTimeout = setTimeout(handleNext, autoScrollTime);
    setScrollRightTime(scrollRightTimeout);
  }

  function stopScrollRightTimeInterval() {
    if (initialPositionTime !== null) {
      clearTimeout(initialPositionTime);
    }
  }

  function startInitialPositionTimeout() {
    if (!autoScrollTime) return;

    stopInitialPositionTimeout();

    const scrollRightTimeout = setTimeout(initialPosition, autoScrollTime);
    setInitialPositionTime(scrollRightTimeout);
  }

  function stopInitialPositionTimeout() {
    if (scrollRightTime !== null) {
      clearTimeout(scrollRightTime);
    }
  }

  window.addEventListener(
    'resize',
    () => {
      if (!listRef.current) return;
      stopAutoScroll();

      listRef.current.scrollLeft = 0;
    },
    false
  );

  return (
    <Container id="list" {...rest}>
      {title && <Title theme={theme}>{title}</Title>}

      <Wrapper>
        <Content
          ref={listRef}
          onScroll={onScroll}
          itemId={itemInfo.id}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {children}
        </Content>

        <Controllers disable={disableControllers}>
          {enableLeftButton && (
            <IndicatorLeftButton
              theme={theme}
              onClick={handleBack}
              disabled={scrolling}
            />
          )}
          {enableRightButton && (
            <IndicatorRightButton
              theme={theme}
              onClick={handleNext}
              disabled={scrolling}
            />
          )}
        </Controllers>
      </Wrapper>
    </Container>
  );
};
