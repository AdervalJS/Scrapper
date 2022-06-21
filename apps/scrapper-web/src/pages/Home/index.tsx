import { useNavigate, Outlet } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { mangas } from '@scrapper/shared/util-test';
import { Theme, MangaBaseProps } from '@scrapper/shared/util-interfaces';
import { MangaReadProp } from '@scrapper/web/util-storage';

import {
  BannerList,
  SimpleItemList,
  CompactItemList,
  ItemCompactedData,
  TitleShadow,
  BannerGradientCard,
} from '@scrapper/web/ui-components';

import {
  Container,
  Carousel,
  Reading,
  Updates,
  FeaturedTitle,
  Featured,
  Banner,
} from './home.styles';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme() as Theme;

  function handleClick(props: MangaBaseProps) {
    const { chapterId, id } = props as MangaReadProp;

    const chapter = chapterId ? `?chapter=${chapterId}` : '';

    navigate(`/read/${id}${chapter}`);
  }

  function goToProfile({ id }: ItemCompactedData) {
    navigate(`/profile/${id}`);
  }

  return (
    <Container theme={theme} id="home">
      <Carousel>
        <BannerList autoScrollTime={600 * 30} data={mangas} />
      </Carousel>

      <Reading>
        <SimpleItemList
          data={mangas}
          title="Continue lendo"
          onPick={handleClick}
        />
      </Reading>

      <Updates>
        <CompactItemList
          onPick={goToProfile}
          data={mangas}
          title="Atualizados"
        />
        <CompactItemList
          onPick={goToProfile}
          data={mangas}
          title="Recém-adicionados"
        />
      </Updates>

      <FeaturedTitle>
        <TitleShadow>
          OS GÊNEROS MAIS <br /> POPULARES
        </TitleShadow>
      </FeaturedTitle>

      <Featured>
        <CompactItemList onPick={goToProfile} data={mangas} title="Isekai" />
        <CompactItemList onPick={goToProfile} data={mangas} title="Horror" />
        <CompactItemList onPick={goToProfile} data={mangas} title="Terror" />
      </Featured>

      <Banner>
        <BannerGradientCard
          buttonText="Aperte aqui !"
          text="Encontre mangás de acordo com o seu gênero preferido."
          title="Navegue por todos os mangás"
        />
      </Banner>

      <Outlet />
    </Container>
  );
};

export default Home;
