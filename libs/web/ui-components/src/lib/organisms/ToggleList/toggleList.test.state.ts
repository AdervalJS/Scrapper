import { atom } from 'recoil';
import { ToggleListType } from '.';

export const listTypeSelected = atom<ToggleListType>({
  key: 'search-list-type-test',
  default: 'compactedList',
});
