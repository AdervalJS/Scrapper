import { atom } from 'recoil';
import { DropSelectOptions } from '../DropSelect';

export const genreFilterSelectedState = atom<DropSelectOptions>({
  key: 'genre-filter-test',
  default: [],
});

export const viewOrderSelectedState = atom<DropSelectOptions>({
  key: 'view-filter-test',
  default: [],
});
