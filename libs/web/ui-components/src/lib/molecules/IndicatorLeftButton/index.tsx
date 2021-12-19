import { Theme } from '@scrapper/shared/util-interfaces';
import { IoIosArrowBack } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { Button, ButtonProps } from '../../atoms/Button';

export type IndicatorLeftButtonProps = ButtonProps;

export const IndicatorLeftButton: React.FC<IndicatorLeftButtonProps> = (
  props
) => {
  const theme = useTheme() as Theme;
  return (
    <Button theme={theme} id="indicatorLeftButton" {...props}>
      <IoIosArrowBack size={20} color={theme.text} />
    </Button>
  );
};
