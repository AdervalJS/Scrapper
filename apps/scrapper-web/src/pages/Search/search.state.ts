import { atom } from 'recoil';
import { DropSelectSelecteds, ToggleListType } from '@scrapper/web/ui-components';
import { Order } from '@scrapper/shared/util-interfaces';

export const viewState = atom<DropSelectSelecteds>({
  key: 'search-view-filter',
  default: [],
});

export const updateState = atom<DropSelectSelecteds>({
  key: 'search-update-filter',
  default: [],
});

export const genresState = atom<DropSelectSelecteds>({
  key: 'search-genre-filter',
  default: [],
});

export const paginationState = atom<number>({
  key: 'search-page-selected',
  default: 1,
});

export const viewOrderState = atom<Order>({
  key: 'search-view-Order',
  default: 'ASC',
});

export const listTypeSelected = atom<ToggleListType>({
  key:'search-list-type',
  default:'compactedList'
})
