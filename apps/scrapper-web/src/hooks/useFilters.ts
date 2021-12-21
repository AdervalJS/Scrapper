import { useState, useEffect } from 'react';
import { useRecoilValue, RecoilState } from 'recoil';
import { useSearchParams } from 'react-router-dom';

import {
  viewOrderSelect,
  genresFilter,
  viwFilter,
  updateFilter,
} from '@scrapper/shared/assets';
import { DropSelectSelecteds, FilterData } from '@scrapper/web/ui-components';
import { Order } from '@scrapper/shared/util-interfaces';

interface UseFilters {
  genresState: RecoilState<DropSelectSelecteds>;
  viewState: RecoilState<DropSelectSelecteds>;
  updateState: RecoilState<DropSelectSelecteds>;
  paginationState: RecoilState<number>;
  viewOrderState: RecoilState<Order>;
}

export const useFilters = ({
  genresState,
  paginationState,
  updateState,
  viewState,
  viewOrderState,
}: UseFilters) => {
  const viewOrder = useRecoilValue(viewOrderState);
  const genres = useRecoilValue(genresState);
  const view = useRecoilValue(viewState);
  const update = useRecoilValue(updateState);
  const page = useRecoilValue(paginationState);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: String(page), genres, view, update, viewOrder });
  }, [genres, view, update, viewOrder, page]);

  const defaultParams = {
    update: searchParams.getAll('update'),
    view: searchParams.getAll('view'),
    genres: searchParams.getAll('genres'),
    viewOrder: searchParams.get('viewOrder') as Order | undefined,
  };

  const filters: FilterData = [
    {
      ...updateFilter,
      enableToggle: true,
      defaultSelecteds: defaultParams.update,
      state: updateState,
    },
    {
      ...viwFilter,
      enableToggle: true,
      defaultSelecteds: defaultParams.view,
      state: viewState,
    },
    {
      ...genresFilter,
      defaultSelecteds: defaultParams.genres,
      state: genresState,
    },
  ];

  return { filters, page, genres, view, update, viewOrder, defaultParams };
};
