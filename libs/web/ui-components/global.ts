import { Theme } from '@scrapper/shared/util-interfaces';
import { StyledComponentProps } from 'styled-components';

declare global {
  type ElementBaseProps<
    p extends object,
    element extends string
  > = StyledComponentProps<element, Theme, p, 'optional'>;
}
