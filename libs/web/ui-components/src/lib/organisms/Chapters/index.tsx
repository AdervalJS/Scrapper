import { useEffect } from 'react';
import { ChapterBaseProps } from '@scrapper/shared/util-interfaces';
import { RecoilState, useRecoilState } from 'recoil';
import { Container } from './chapters.styles';
import { DropSelectOption, Option } from '../../molecules/DropSelectOption';
import { Title } from '../../atoms/Title';

export type ChaptersState = RecoilState<ChaptersSelectedId>;
export type ChaptersSelectedId = number | undefined;

export interface ChaptersProps {
  data: ChapterBaseProps[];
  state: ChaptersState;
  defaultSelectedId?: ChaptersSelectedId;
}

export const Chapters: React.FC<ChaptersProps> = ({
  data,
  defaultSelectedId,
  state,
}) => {
  const [selectedId, setSelectedId] = useRecoilState(state);

  useEffect(() => {
    if (!selectedId) setSelectedId(defaultSelectedId);
  }, [defaultSelectedId]); //eslint-disable-line

  function handleClick({ value: id }: Option) {
    setSelectedId(Number(id));
  }

  return (
    <Container className="chapters">
      <Title>Capítulos</Title>
      {data.map((chapter) => (
        <DropSelectOption
          key={chapter.id}
          onPick={handleClick}
          selected={chapter.id === selectedId}
          option={{ label: chapter.name, value: chapter.id }}
        />
      ))}
    </Container>
  );
};
