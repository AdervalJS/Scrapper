import 'ts-jest';
import { FindResponse } from '../dtos/responses.dto';

export function testChapter(chapter: FindResponse) {
  expect(typeof chapter.id === 'number').toBeTruthy();
  expect(typeof chapter.name === 'string').toBeTruthy();
  expect(typeof chapter.originUrl === 'string').toBeTruthy();
  expect(typeof chapter.chapterNumber === 'number').toBeTruthy();

  chapter.pages.forEach(({ id, pageNumber, url }) => {
    expect(typeof id === 'number').toBeTruthy();
    expect(typeof pageNumber === 'number').toBeTruthy();
    expect(typeof url === 'string').toBeTruthy();
  });
}
