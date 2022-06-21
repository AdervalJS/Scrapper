import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import { chapters } from '@scrapper/shared/util-test';
import { useChapterSelected } from '../../hooks';

import {
  Chapters,
  Title,
  CloseButton,
  PagesList,
  Text,
} from '@scrapper/web/ui-components';
import { pagesListFocusedState, chapterSelectedIdState } from './read.state';
import { Container, Content, Header, HeaderContent } from './read.styles';

const Read: React.FC = () => {
  const { id } = useParams();
  const { defaultParams } = useChapterSelected({
    chapterSelectedIdState,
    firstChapterId: chapters[0].id,
  });
  const pagesListFocused = useRecoilValue(pagesListFocusedState);
  const navigate = useNavigate();

  const { manga, name, pages } = chapters.filter(
    ({ manga }) => manga.id === Number(id)
  )[0];

  function close() {
    navigate(-1);
  }

  return (
    <Container
      data={{ imageUrl: manga.image, alt: manga.name }}
      reading={pagesListFocused}
    >
      <Header>
        <HeaderContent>
          <Title>{manga.name}</Title>
          <Text>{name}</Text>
        </HeaderContent>
        <CloseButton onClick={close} />
      </Header>

      <PagesList state={pagesListFocusedState} data={pages} />

      <Content>
        <Chapters
          defaultSelectedId={defaultParams.chapterId}
          data={chapters}
          state={chapterSelectedIdState}
        />
      </Content>
    </Container>
  );
};

export default Read;
