import { FooterData } from '.';
import { MobileCardData } from '../../molecules/MobileCard';

export const card: MobileCardData = {
  label: 'mobile card',
  text: 'description',
};

export const data: FooterData = [
  {
    title: 'Paginas',
    links: [
      {
        label: 'Home',
        url: '/',
      },
    ],
  },
  {
    title: 'importantes',
    links: [
      {
        label: 'dmca',
        url: '/dmca',
      },
    ],
  },
];

export const copyright = 'the copyright';
