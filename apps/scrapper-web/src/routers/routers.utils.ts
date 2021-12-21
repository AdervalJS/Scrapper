import {
  HeaderLinks,
  FooterData,
  MobileCardData,
} from '@scrapper/web/ui-components';

export const HeaderLink: HeaderLinks = [
  { label: 'Home', url: '/' },
  { label: 'Todos', url: '/viewAll' },
  { label: 'Gêneros', url: '/genres' },
];

export const footerData: FooterData = [
  { title: 'Paginas', links: HeaderLink },
  {
    title: 'Importantes',
    links: [{ label: 'DMCA', url: '/dmca' }],
  },
];

export const copyright =
  'Direitos autorais, marcas para mangás, e materiais promocionais são mantidos por seus respectivos proprietários, a sua utilização é permitida nos termos da cláusula de Uso Justo da Lei de Direitos Autorais Americana. (Copyrights and trademarks for the manga, and other promotional materials are held by their respective owners and their use is allowed under the Fair Use clause of the U.S. Copyright Law.) - Hosted in U.S.';

export const card: MobileCardData = {
  label: 'Scrapper Mobile',
  text: 'Em desenvolvimento',
};
