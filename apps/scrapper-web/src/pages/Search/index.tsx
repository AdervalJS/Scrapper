import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useParams, useNavigate } from 'react-router-dom';
import { mangas } from '@scrapper/web/util-test';
import { viewOrderSelect } from '@scrapper/shared/assets';
import { useMobile, useFilters } from '../../hooks';

import {
  ToggleList,
  TitleAndSelect,
  Pagination,
  FilterButton,
  Filters,
} from '@scrapper/web/ui-components';

import {
  genresState,
  viewState,
  updateState,
  paginationState,
  viewOrderState,
  listTypeSelected,
} from './search.state';

import {
  Container,
  HeaderContent,
  FiltersWrapper,
  ListWrapper,
  PaginationWrapper,
} from './search.styles';

const Search: React.FC = () => {
  const { item } = useParams();
  const navigate = useNavigate();
  const setTypeListView = useSetRecoilState(listTypeSelected);
  const { isMobile } = useMobile();
  const [filtersVisible, setFiltersVisible] = useState(false);
  const { filters, page, genres, view, update, viewOrder, defaultParams } =
    useFilters({
      genresState,
      viewState,
      updateState,
      paginationState,
      viewOrderState,
    });

  useEffect(() => {
    if (isMobile) {
      setTypeListView('compactedList');
    } else {
      setFiltersVisible(false);
    }
  }, [isMobile]);

  if (!item) return <div>loading</div>;

  function hiddenFilters() {
    setFiltersVisible(false);
  }

  function showFilters() {
    setFiltersVisible(true);
  }

  function goToProfile(id: number) {
    navigate(`/profile/${id}`);
  }

  return (
    <Container filtersVisible={filtersVisible}>
      <ListWrapper>
        <ToggleList
          data={mangas}
          state={listTypeSelected}
          onItemClick={({ id }) => goToProfile(id)}
          header={
            <HeaderContent>
              <TitleAndSelect
                defaultSelected={defaultParams.viewOrder}
                state={viewOrderState}
                label="Ordenar de"
                options={viewOrderSelect}
              />
              <FilterButton onClick={showFilters} />
            </HeaderContent>
          }
        />
      </ListWrapper>

      <FiltersWrapper>
        <Filters
          data={filters}
          extraButton={{ label: 'Salva', onClick: hiddenFilters }}
        />
      </FiltersWrapper>

      <PaginationWrapper>
        <Pagination
          state={paginationState}
          totalPage={mangas.length}
          totalVisiblePage={10}
        />
      </PaginationWrapper>
    </Container>
  );
};

export default Search;
