import { genres } from './genres';
import { Filter, FilterOption, Order } from '@scrapper/shared/util-interfaces';

export const genresFilter: Filter = {
  title: 'Gêneros',
  options: genres.map((genre) => ({
    label: genre,
    value: genre,
  })),
};

export const viwFilter: Filter = {
  title: 'populares',
  options: [
    {
      label: 'Mais populares',
      value: 'DESC',
    },
    {
      label: 'Menos populares Atualizados',
      value: 'ASC',
    },
  ],
};

export const updateFilter: Filter = {
  title: 'Atualizados',
  options: [
    {
      label: 'Mais novos',
      value: 'DESC',
    },
    {
      label: 'Mais velhos',
      value: 'ASC',
    },
  ],
};

export const viewOrderSelect: FilterOption<Order>[] = [
  {
    label: 'A a Z',
    value: 'ASC',
  },
  {
    label: 'Z a A',
    value: 'DESC',
  },
];
