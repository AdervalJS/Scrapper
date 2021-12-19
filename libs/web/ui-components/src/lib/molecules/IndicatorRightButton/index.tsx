import { Theme } from '@scrapper/shared/util-interfaces';
import { IoIosArrowForward } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { Button, ButtonProps } from '../../atoms/Button';

export type IndicatorRightButtonProps = ButtonProps;

export const IndicatorRightButton: React.FC<IndicatorRightButtonProps> = (
  props
) => {
  const theme = useTheme() as Theme;
  return (
    <Button theme={theme} id="indicatorRightButton" {...props}>
      <IoIosArrowForward size={20} color={theme.text} />
    </Button>
  );
};
