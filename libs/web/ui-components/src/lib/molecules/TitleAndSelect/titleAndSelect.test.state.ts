import { atom } from 'recoil';
import { Order } from '@scrapper/shared/util-interfaces';

export const titleAndSelectState = atom<Order>({
  key: 'titleAndSelect-test',
  default: 'ASC',
});
