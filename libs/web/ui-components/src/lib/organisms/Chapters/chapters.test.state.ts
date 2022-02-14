import { atom } from 'recoil';

export const SelectedIdState = atom<number | undefined>({
  key: 'chapters-selectedId-test',
  default: undefined,
});
