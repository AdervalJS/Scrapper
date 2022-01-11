import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { DropSelect, DropSelectProps } from '../DropSelect';
import { Container, ContainerProps } from './filters.styles';
import { GradientButton } from '../../atoms/GradientButton';

export type FilterData = Pick<
  DropSelectProps,
  'title' | 'options' | 'state' | 'enableToggle' | 'defaultSelecteds'
>[];

export interface FiltersProps extends ContainerProps {
  data: FilterData;
  extraButton?: {
    label: string;
    onClick?: () => void;
  };
}

export const Filters: React.FC<FiltersProps> = ({
  data,
  children,
  extraButton,
  ...rest
}) => {
  const theme = useTheme() as Theme;

  return (
    <Container id="filters" theme={theme} {...rest}>
      {data.map((filterData) => (
        <DropSelect key={filterData.title} {...filterData} />
      ))}

      {extraButton && (
        <GradientButton onClick={extraButton.onClick}>
          {extraButton.label}
        </GradientButton>
      )}
    </Container>
  );
};
