import { StyledComponentProps } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

export type ElementBaseProps<
  element extends string,
  p extends object
> = StyledComponentProps<element, Theme, p, 'optional'>;
