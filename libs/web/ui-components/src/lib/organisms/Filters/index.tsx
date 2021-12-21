import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { DropSelect, DropSelectProps } from '../DropSelect';
import { Container, ContainerProps } from './filters.styles';

export type FilterData = Pick<
  DropSelectProps,
  'title' | 'options' | 'state' | 'enableToggle' | 'defaultSelecteds'
>[];

export interface FiltersProps extends ContainerProps {
  data: FilterData;
}

export const Filters: React.FC<FiltersProps> = ({
  data,
  children,
  ...rest
}) => {
  const theme = useTheme() as Theme;

  return (
    <Container id="filters" theme={theme} {...rest}>
      {data.map((filterData) => (
        <DropSelect key={filterData.title} {...filterData} />
      ))}

      {children}
    </Container>
  );
};
