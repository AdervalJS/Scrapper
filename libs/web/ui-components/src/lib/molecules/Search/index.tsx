import { KeyboardEvent, useState } from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { Input } from '../../atoms/Input';
import { SearchIcon } from '../../atoms/SearchIcon';

import { Container, ContainerProps } from './search.styles';

export interface SearchProps extends ContainerProps {
  onSearch?: (prop: string) => void;
  searchValue?: string;
}

export const Search: React.FC<SearchProps> = ({
  onSearch,
  onKeyDown,
  searchValue = '',
}) => {
  const [value, setValue] = useState(searchValue);
  const theme = useTheme() as Theme;
  console.log();

  function handleSearch(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;

    if (onKeyDown) onKeyDown(e);

    if (value !== '' && key === 'Enter' && onSearch) {
      onSearch(value);
    }
  }

  return (
    <Container id="search" theme={theme}>
      <SearchIcon color={theme.text} />
      <Input
        value={value}
        onKeyDown={handleSearch}
        onChange={({ target }) => setValue(target.value)}
        placeholder="Pesquisar"
      />
    </Container>
  );
};
