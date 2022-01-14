import { atom } from 'recoil';
import { DropSelectSelecteds, ToggleListType } from '@scrapper/web/ui-components';
import { Order } from '@scrapper/shared/util-interfaces';

export const viewState = atom<DropSelectSelecteds>({
  key: 'viewAll-view-filter',
  default: [],
});

export const updateState = atom<DropSelectSelecteds>({
  key: 'viewAll-update-filter',
  default: [],
});

export const genresState = atom<DropSelectSelecteds>({
  key: 'viewAll-genre-filter',
  default: [],
});

export const paginationState = atom<number>({
  key: 'viewAll-page-selected',
  default: 1,
});

export const viewOrderState = atom<Order>({
  key: 'viewAll-view-Order',
  default: 'ASC',
});

export const listTypeSelected = atom<ToggleListType>({
  key:'viewAll-list-type',
  default:'compactedList'
})
