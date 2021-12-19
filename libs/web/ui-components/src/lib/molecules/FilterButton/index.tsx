import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { FilterIcon } from '../../atoms/FilterIcon';
import { Container, ContainerProps } from './filterButton.styles';

export type FilterButtonProps = ContainerProps;

export const FilterButton: React.FC<FilterButtonProps> = (props) => {
  const theme = useTheme() as Theme;

  return (
    <Container theme={theme} id="filterButton" {...props}>
      <FilterIcon size={20} color={theme.text} />
    </Container>
  );
};
