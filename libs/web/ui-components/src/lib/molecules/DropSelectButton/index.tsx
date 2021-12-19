import { useTheme } from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Theme } from '@scrapper/shared/util-interfaces';

import { TitleMedium } from '../../atoms/TitleMedium';

import { Container, ContainerProps } from './dropSelectButton.styles';

export interface DropSelectButtonProps extends ContainerProps {
  title: string;
  compacted?: boolean;
}

export const DropSelectButton: React.FC<DropSelectButtonProps> = ({
  title,
  compacted,
  ...rest
}) => {
  const theme = useTheme() as Theme;

  return (
    <Container theme={theme} id="dropSelectButton" {...rest}>
      <TitleMedium>{title}</TitleMedium>
      {compacted && <IoIosArrowDown size={20} color="#FFF" />}

      {!compacted && <IoIosArrowUp size={20} color="#FFF" />}
    </Container>
  );
};
