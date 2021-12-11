import { buildQueries } from '@testing-library/react';

const getByID = (container: HTMLElement, id: string): HTMLElement[] =>
  Array.from(container.querySelectorAll(`#${id}`));

const getMultipleError = () => '...';
const getMissingError = () => 'Could not find element!';

const [queryById, getAllById, getById, findAllById, findById] = buildQueries(
  getByID,
  getMultipleError,
  getMissingError
);

export { queryById, getAllById, getById, findAllById, findById };
