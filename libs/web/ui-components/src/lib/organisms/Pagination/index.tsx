import { useState, useEffect } from 'react';
import { useRecoilState, RecoilState } from 'recoil';
import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';

import { getPages } from './pagination.utils';
import { Container, ContainerProps } from './pagination.styles';

export interface PaginationProps extends ContainerProps {
  state: RecoilState<number>;
  totalVisiblePage: number;
  totalPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalVisiblePage,
  state,
  totalPage,
  ...rest
}) => {
  const [pages, setPages] = useState<Array<number>>([]);
  const [selected, setSelected] = useRecoilState(state);
  const theme = useTheme() as Theme;

  useEffect(() => {
    const newPages = getPages(totalPage, selected, totalVisiblePage);
    setPages(newPages);
  }, [selected, totalVisiblePage, totalPage]);

  function handleClick(page: number) {
    setSelected(() => page);
  }

  return (
    <Container theme={theme} id="pagination" {...rest}>
      {pages.map((page) => (
        <Button
          key={page}
          keepPressed={page === selected}
          onClick={() => handleClick(page)}
        >
          <Text>{page}</Text>
        </Button>
      ))}
    </Container>
  );
};
