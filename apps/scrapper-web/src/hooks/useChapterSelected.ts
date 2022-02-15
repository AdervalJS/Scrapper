import { useEffect } from 'react';
import { useRecoilValue, RecoilState } from 'recoil';
import { useSearchParams } from 'react-router-dom';

import { ChaptersSelectedId } from '@scrapper/web/ui-components';

interface UseChapterSelected {
  chapterSelectedIdState: RecoilState<ChaptersSelectedId>;
  firstChapterId?: number;
}

export const useChapterSelected = ({
  chapterSelectedIdState,
  firstChapterId,
}: UseChapterSelected) => {
  const chapterSelectedId = useRecoilValue(chapterSelectedIdState);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(handleChapterId, [chapterSelectedId]);

  function handleChapterId() {
    const q_chapterId = searchParams.get('chapterId');
    const chapterId = chapterSelectedId
      ? chapterSelectedId
      : q_chapterId
      ? q_chapterId
      : firstChapterId;

    setSearchParams({ chapterId: String(chapterId) }, { replace: true });
  }

  const defaultParams = {
    chapterId: Number(searchParams.get('chapterId')),
  };

  return { chapterSelectedId, defaultParams };
};
