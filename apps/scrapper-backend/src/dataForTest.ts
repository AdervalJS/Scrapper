import {
  MangaBaseProps,
  Manga,
  MangaProfile,
  Chapter,
  Page,
} from '@scrapper/shared/util-interfaces';

export const baseManga: MangaBaseProps = {
  id: 1,
  name: 'Bleach',
  image:
    'https://images-na.ssl-images-amazon.com/images/I/516WLV8lFCL._SX331_BO1,204,203,200_.jpg',
};
export const manga: Manga = {
  ...baseManga,
  view: 102,
  synopsis:
    'Bleach é uma série de mangá escrita e ilustrada por Tite Kubo. Bleach segue as aventuras de Ichigo Kurosaki que após ganhar os poderes de um Ceifeiro de Almas, através de uma Ceifeira de Almas, Rukia Kuchiki. Com os seus novos poderes, Ichigo é forçado a assumir o dever de guiar almas boas ao mundo pós-vida à Soul Society, e derrotar os Hollows que tentam devorá-las.',
  author: 'Tite Kubo',
  genres: ['Ação', 'Aventura'],
};

export const mangas: Manga[] = [
  manga,
  {
    id: 2,
    name: 'Tokyou ghoul:re',
    author: 'Sui Ishida',
    genres: ['Ação', 'Horror'],
    image:
      'https://th.bing.com/th/id/R.83a571669bf52c0615c482881afd87df?rik=3VsgkO6GxzzVww&riu=http%3a%2f%2fd28hgpri8am2if.cloudfront.net%2fbook_images%2fonix%2fcvr9781421580463%2ftokyo-ghoul-vol-11-9781421580463_hr.jpg&ehk=cMAo3suAMF5HV5RjxJYk3D2CcDOX6wBAimhUif3mq7E%3d&risl=&pid=ImgRaw&r=0',
    synopsis:
      'Ken Kaneki is an ordinary college student until a violent encounter turns him into the first half-human ...',
    view: 200,
  },
  {
    id: 3,
    name: 'Goblin Slayer',
    author: ' Kagyu Kumo',
    genres: ['Ação', 'Horror'],
    image:
      'https://th.bing.com/th/id/OIP.Pi6IHdG4Ua5ooMH7wpdDaAHaKi?pid=ImgDet&rs=1',
    synopsis:
      'Goblins são os monstros de nível mais baixo - fracos e não muito inteligentes. Mas enquanto os...',
    view: 200,
  },
  {
    id: 4,
    name: 'Naruto',
    author: 'Masashi Kishimoto',
    genres: ['Ação', 'Aventura'],
    image: 'https://upload.wikimedia.org/wikipedia/pt/d/d2/Naruto_vol._01.jpg',
    synopsis:
      'Uzumaki Naruto é um garoto que teve um demônio preso dentro dele quando era um bebê, para...',
    view: 200,
  },
  {
    id: 5,
    name: 'Naruto shippuden',
    author: 'Masashi Kishimoto',
    genres: ['Ação', 'Aventura'],
    image:
      'https://th.bing.com/th/id/R.662036a41a1372993799656334602da9?rik=%2fiGIpjJ5me%2fx2w&pid=ImgRaw&r=0',
    synopsis:
      'Dois anos e meio se passaram após a partida de Naruto Uzumaki e Jiraya na vila de Konoha...',
    view: 200,
  },
];

export const pages: Page[] = [
  {
    id: 1,
    url: 'https://th.bing.com/th/id/R.f44a9abe269268eb00d51c809400e216?rik=kXjrPFw6pVHdvQ&pid=ImgRaw&r=0',
    pageNumber: 1,
  },
  {
    id: 2,
    url: 'https://th.bing.com/th/id/R.2ccd18907afaae997627191bad9d9a47?rik=msIemKJxvM02wg&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f13900000%2fFav-pages-bleach-manga-and-tv-13977535-750-1078.jpg&ehk=KGpzgaaOjnxWqty8AUcDEn9lX0fIdtC8Ke6F6XZXrKM%3d&risl=&pid=ImgRaw&r=0',
    pageNumber: 2,
  },
  {
    id: 3,
    url: 'https://th.bing.com/th/id/R.f44a9abe269268eb00d51c809400e216?rik=kXjrPFw6pVHdvQ&pid=ImgRaw&r=0',
    pageNumber: 3,
  },
  {
    id: 4,
    url: 'https://th.bing.com/th/id/R.2ccd18907afaae997627191bad9d9a47?rik=msIemKJxvM02wg&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f13900000%2fFav-pages-bleach-manga-and-tv-13977535-750-1078.jpg&ehk=KGpzgaaOjnxWqty8AUcDEn9lX0fIdtC8Ke6F6XZXrKM%3d&risl=&pid=ImgRaw&r=0',
    pageNumber: 4,
  },
];

export const mangasBase: MangaBaseProps[] = mangas.map(
  ({ id, name, image }) => ({ id, name, image })
);

export const chapters: Chapter[] = mangasBase.map((manga, index) => ({
  id: index + 1,
  name: 'capitulo ' + (index + 1),
  pages,
  manga,
  nextChapter: {
    id: index + 2,
    name: 'capitulo ' + (index + 2),
  },
}));

export const mangaProfile: MangaProfile[] = mangas.map((manga) => ({
  ...manga,
  relation: mangas,
  moreAuthor: mangas,
  chapters: chapters,
}));
