import { atom } from 'recoil';

export const PagesListFocus = atom<boolean>({
  key: 'pageList-focus-test',
  default: false,
});
