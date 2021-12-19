import { genresFilter, viwFilter } from '@scrapper/shared/assets';
import { FilterData } from '.';
import {
  genreFilterSelectedState,
  viewOrderSelectedState,
} from './filters.test.state';

export const data: FilterData[] = [
  {
    ...viwFilter,
    state: viewOrderSelectedState,
    enableToggle: true,
  },
  {
    ...genresFilter,
    state: genreFilterSelectedState,
  },
];
