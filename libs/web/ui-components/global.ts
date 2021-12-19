import { StyledComponentProps } from 'styled-components';
import { Theme } from '../../shared/util-interfaces/src';

declare global {
  type ElementBaseProps<
    p extends object,
    element extends string
  > = StyledComponentProps<element, Theme, p, 'optional'>;
}
