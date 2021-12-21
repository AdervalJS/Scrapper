import { atom } from 'recoil';
import { DropSelectSelecteds } from '.';

export const dropSelectState = atom<DropSelectSelecteds>({
  key: 'dropSelect-test',
  default: [],
});
