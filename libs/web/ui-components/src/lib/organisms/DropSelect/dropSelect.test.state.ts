import { atom } from 'recoil';
import { DropSelectOptions } from '.';

export const dropSelectState = atom<DropSelectOptions>({
  key: 'dropSelect-test',
  default: [],
});
