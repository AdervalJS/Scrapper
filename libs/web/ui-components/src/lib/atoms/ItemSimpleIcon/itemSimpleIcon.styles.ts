import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContentProps = ElementBaseProps<'img', object>;

export const Content = styled.img<ContentProps>``;
