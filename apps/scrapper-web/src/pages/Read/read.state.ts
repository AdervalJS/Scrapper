import { atom } from 'recoil';
import {
  ChaptersSelectedId,
  PagesListState,
} from '@scrapper/web/ui-components';

export const chapterSelectedIdState = atom<ChaptersSelectedId>({
  key: 'read-chapterId',
  default: undefined,
});

export const pagesListFocusedState = atom<PagesListState>({
  key: 'read-pages-list-focused',
  default: true,
});
