import { atom } from 'recoil';
import { DropSelectSelecteds } from '../DropSelect';

export const genreFilterSelectedState = atom<DropSelectSelecteds>({
  key: 'genre-filter-test',
  default: [],
});

export const viewOrderSelectedState = atom<DropSelectSelecteds>({
  key: 'view-filter-test',
  default: [],
});
