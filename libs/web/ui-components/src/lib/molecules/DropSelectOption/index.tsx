import { FilterOption, Theme } from '@scrapper/shared/util-interfaces';
import { Container, ContainerProps } from './dropSelectOption.styles';
import { TitleMedium } from '../../atoms/TitleMedium';
import { useTheme } from 'styled-components';

export type Option = FilterOption<string | number>;

export interface DropSelectOptionProps extends ContainerProps {
  option: Option;
  onPick?: (option: Option) => void;
  stopPropagation?: boolean;
}

export const DropSelectOption: React.FC<DropSelectOptionProps> = ({
  option,
  stopPropagation,
  onClick = () => {}, // eslint-disable-line
  onPick = () => {}, // eslint-disable-line
  ...rest
}) => {
  const theme = useTheme() as Theme;

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (stopPropagation) e.stopPropagation();

    onPick(option);
    onClick(e);
  };

  return (
    <Container
      id="dropSelectOption"
      {...rest}
      onClick={handleClick}
      theme={theme}
    >
      <TitleMedium theme={theme}>{option.label}</TitleMedium>
    </Container>
  );
};
