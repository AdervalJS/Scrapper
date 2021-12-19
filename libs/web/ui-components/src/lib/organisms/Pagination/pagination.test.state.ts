import { atom } from 'recoil';

export const pageSelectedState = atom<number>({
  key: 'pagination-selected-test',
  default: 1,
});
