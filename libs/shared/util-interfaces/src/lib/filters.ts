export interface FilterOption<type> {
  label: string;
  value: type;
}

export interface Filter {
  title: string;
  options: FilterOption<string | number>[];
}

export type Order = 'DESC' | 'ASC';
