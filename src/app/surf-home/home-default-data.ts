import { BoardData, Dimention, BoardImage, TabsetDescription, TabsetImages, ActivatedTab, Tabset } from './board-data';
import { TeamData } from './surf-section-team/team-data';
import { PostItem } from '../blog/post/post';

export const boardData: BoardData[] = [
  {
    id: 'jr-surfboards-the-donny-stoker-yellow-green',
    title: 'JR Surfboards The Donny Stoker Yellow/Green Rail Fade ^^^^^^',
    date: '2017-05-25T00:00:00.000Z',
    votingStarsRange: '60%',
    votingStarsNumber: 52,
    tabset1: {
      tabseId: 'jrSurfboardsTheDonnyStokerYellowGreenImagesDescription',
      description: 'Easy to ride, care free surfing craft that\'s fun for everyone, paddles well, super fast down the line and\n ' +
                  ' great for any level of surfing depending on who rides it. The Donny Stoker,\n ' +
                  ' a rework on design from stokesys first ever pro model.\n ' +
                  ' A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.',
      features: 'The Donny\'s nose-to-tail single concave and tail shape combo makes it fast, \n ' +
                'responsive and made to suit point breaks, hollow beachies and reef passes from 1-6 foot. \n ' +
                'With a super-fast and lively rocker for silky smooth rail to rail transition which Dion is known for, \n ' +
                'The Donny is a beautifully balanced super high performance short board, with rocker, rails, \n ' +
                'concave and outline working simultaneously to create a responsive and drivey board with plenty of hold.',
      dimentions: [
        {
          size: '5\'7\"',
          width: '18 1/4\"',
          thickness: '2 1/8\"',
          volume: '22.40',
        },
        {
          size: '5\'8\"',
          width: '18 3/8\"',
          thickness: '2 3/16\"',
          volume: '23.50',
        },
        {
          size: '5\'9\"',
          width: '18 1/2\"',
          thickness: '2 1/4\"',
          volume: '24.60',
        },
        {
          size: '5\'10\"',
          width: '18 5/8\"',
          thickness: '2 1/4\"',
          volume: '25.30',
        },
        {
          size: '5\'11\"',
          width: '18 3/4\"',
          thickness: '2 5/16\"',
          volume: '26.40',
        },
        {
          size: '6\'0\"',
          width: '18 7/8\"',
          thickness: '2 3/8\"',
          volume: '27.50',
        },
        {
          size: '6\'1\"',
          width: '19\"',
          thickness: '2 3/8\"',
          volume: '28.20',
        },
        {
          size: '6\'2\"',
          width: '19 1/4\"',
          thickness: '2 7/16\"',
          volume: '29.60',
        },
        {
          size: '6\'3\"',
          width: '19 3/8\"',
          thickness: '2 1/2\"',
          volume: '31.00',
        },
        {
          size: '6\'4\"',
          width: '19 1/2\"',
          thickness: '2 9/16\"',
          volume: '32.40',
        },
        {
          size: '6\'5\"',
          width: '19 5/8\"',
          thickness: '2 5/8\"',
          volume: '34.00',
        }
      ],
    },
    price: '499.99',
    tabset2: {
      tabseId: 'jrSurfboardsTheDonnyStokerYellowGreenImages',
      images: [
        {
          bigImage: 'assets/img/board.png',
          smallImage: 'assets/img/board-small.png',
          alt: 'Board',
        },
        {
          bigImage: 'assets/img/board1.png',
          smallImage: 'assets/img/board-bottom.png',
          alt: 'Board Bottom',
        },
        {
          bigImage: 'assets/img/board2.png',
          smallImage: 'assets/img/board-front.png',
          alt: 'Board Front',
        },
      ]
    },
  },
  {
    id: 'jr-surfboards-the-donny-stoker-yellow',
    title: 'JR Surfboards The Donny Stoker Yellow',
    date: '2017-05-25T00:00:00.000Z',
    votingStarsRange: '60%',
    votingStarsNumber: 52,
    tabset1: {
      tabseId: 'jrSurfboardsTheDonnyStokerYellowDescription',
      description: 'Easy to ride, care free surfing craft that\'s fun for everyone, paddles well, super fast down the line and\n ' +
                  ' great for any level of surfing depending on who rides it. The Donny Stoker,\n ' +
                  ' a rework on design from stokesys first ever pro model.\n ' +
                  ' A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.',
      features: 'The Donny\'s nose-to-tail single concave and tail shape combo makes it fast, \n ' +
                'responsive and made to suit point breaks, hollow beachies and reef passes from 1-6 foot. \n ' +
                'With a super-fast and lively rocker for silky smooth rail to rail transition which Dion is known for, \n ' +
                'The Donny is a beautifully balanced super high performance short board, with rocker, rails, \n ' +
                'concave and outline working simultaneously to create a responsive and drivey board with plenty of hold.',
      dimentions: [
        {
          size: '5\'7\"',
          width: '18 1/4\"',
          thickness: '2 1/8\"',
          volume: '22.40',
        },
        {
          size: '5\'8\"',
          width: '18 3/8\"',
          thickness: '2 3/16\"',
          volume: '23.50',
        },
        {
          size: '5\'9\"',
          width: '18 1/2\"',
          thickness: '2 1/4\"',
          volume: '24.60',
        },
        {
          size: '5\'10\"',
          width: '18 5/8\"',
          thickness: '2 1/4\"',
          volume: '25.30',
        },
        {
          size: '5\'11\"',
          width: '18 3/4\"',
          thickness: '2 5/16\"',
          volume: '26.40',
        },
        {
          size: '6\'0\"',
          width: '18 7/8\"',
          thickness: '2 3/8\"',
          volume: '27.50',
        },
        {
          size: '6\'1\"',
          width: '19\"',
          thickness: '2 3/8\"',
          volume: '28.20',
        },
        {
          size: '6\'2\"',
          width: '19 1/4\"',
          thickness: '2 7/16\"',
          volume: '29.60',
        },
        {
          size: '6\'3\"',
          width: '19 3/8\"',
          thickness: '2 1/2\"',
          volume: '31.00',
        },
        {
          size: '6\'4\"',
          width: '19 1/2\"',
          thickness: '2 9/16\"',
          volume: '32.40',
        },
        {
          size: '6\'5\"',
          width: '19 5/8\"',
          thickness: '2 5/8\"',
          volume: '34.00',
        }
      ],
    },
    price: '499.99',
    tabset2: {
      tabseId: 'jrSurfboardsTheDonnyStokerYellowImages',
      images: [
        {
          bigImage: 'assets/img/board.png',
          smallImage: 'assets/img/board-small.png',
          alt: 'Board',
        },
        {
          bigImage: 'assets/img/board1.png',
          smallImage: 'assets/img/board-bottom.png',
          alt: 'Board Bottom',
        },
        {
          bigImage: 'assets/img/board2.png',
          smallImage: 'assets/img/board-front.png',
          alt: 'Board Front',
        },
      ]
    },
  },
  {
    id: 'jr-surfboards-the-donny-stoker-dark',
    title: 'JR Surfboards The Donny Stoker Dark',
    date: '2017-05-25T00:00:00.000Z',
    votingStarsRange: '60%',
    votingStarsNumber: 52,
     tabset1: {
      tabseId: 'jrSurfboardsTheDonnyStokerSarkDescription',
      description: 'Easy to ride, care free surfing craft that\'s fun for everyone, paddles well, super fast down the line and\n ' +
                  ' great for any level of surfing depending on who rides it. The Donny Stoker,\n ' +
                  ' a rework on design from stokesys first ever pro model.\n ' +
                  ' A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.',
      features: 'The Donny\'s nose-to-tail single concave and tail shape combo makes it fast, \n ' +
                'responsive and made to suit point breaks, hollow beachies and reef passes from 1-6 foot. \n ' +
                'With a super-fast and lively rocker for silky smooth rail to rail transition which Dion is known for, \n ' +
                'The Donny is a beautifully balanced super high performance short board, with rocker, rails, \n ' +
                'concave and outline working simultaneously to create a responsive and drivey board with plenty of hold.',
      dimentions: [
        {
          size: '5\'7\"',
          width: '18 1/4\"',
          thickness: '2 1/8\"',
          volume: '22.40',
        },
        {
          size: '5\'8\"',
          width: '18 3/8\"',
          thickness: '2 3/16\"',
          volume: '23.50',
        },
        {
          size: '5\'9\"',
          width: '18 1/2\"',
          thickness: '2 1/4\"',
          volume: '24.60',
        },
        {
          size: '5\'10\"',
          width: '18 5/8\"',
          thickness: '2 1/4\"',
          volume: '25.30',
        },
        {
          size: '5\'11\"',
          width: '18 3/4\"',
          thickness: '2 5/16\"',
          volume: '26.40',
        },
        {
          size: '6\'0\"',
          width: '18 7/8\"',
          thickness: '2 3/8\"',
          volume: '27.50',
        },
        {
          size: '6\'1\"',
          width: '19\"',
          thickness: '2 3/8\"',
          volume: '28.20',
        },
        {
          size: '6\'2\"',
          width: '19 1/4\"',
          thickness: '2 7/16\"',
          volume: '29.60',
        },
        {
          size: '6\'3\"',
          width: '19 3/8\"',
          thickness: '2 1/2\"',
          volume: '31.00',
        },
        {
          size: '6\'4\"',
          width: '19 1/2\"',
          thickness: '2 9/16\"',
          volume: '32.40',
        },
        {
          size: '6\'5\"',
          width: '19 5/8\"',
          thickness: '2 5/8\"',
          volume: '34.00',
        }
      ],
    },
    price: '499.99',
    tabset2: {
      tabseId: 'jrSurfboardsTheDonnyStokerSarkImages',
      images: [
        {
          bigImage: 'assets/img/board.png',
          smallImage: 'assets/img/board-small.png',
          alt: 'Board',
        },
        {
          bigImage: 'assets/img/board1.png',
          smallImage: 'assets/img/board-bottom.png',
          alt: 'Board Bottom',
        },
        {
          bigImage: 'assets/img/board2.png',
          smallImage: 'assets/img/board-front.png',
          alt: 'Board Front',
        },
      ]
    },
  }
];

export let teamData: TeamData[] = [
  {
    id: 'taj-burrow-1',
    firstname: 'Taj',
    surname: 'Burrow',
    accountName: '@tajamos',
    accountLink: 'https://www.instagram.com/',
    address: 'Yallingup, Australia',
    srcLink: 'assets/img/team-1.png'
  },
  { id: 'malia-manuel-1',
    firstname: 'Malia',
    surname: 'Manuel',
    accountName: '@maliamanuel',
    accountLink: 'https://www.instagram.com/',
    address: 'Wailua, Hi',
    srcLink: 'assets/img/team-2.png'
  },
  { id: 'tan-walsh-1',
    firstname: 'Ian',
    surname: 'Walsh',
    accountName: '@ian.walsh',
    accountLink: 'https://www.instagram.com/',
    address: 'Maui, Hi',
    srcLink: 'assets/img/team-3.png'
  },
  { id: 'macy-callaghan-1',
    firstname: 'Macy',
    surname: 'Callaghan',
    accountName: '@macyjanecallaghan',
    accountLink: 'https://www.instagram.com/',
    address: 'San Clemente, CA',
    srcLink: 'assets/img/team-4.png'
  },
  { id: 'tajer-burrower-1',
    firstname: 'Tajer',
    surname: 'Burrower',
    accountName: '@tajbur',
    accountLink: 'https://www.instagram.com/',
    address: 'Yallingup, Australia',
    srcLink: 'assets/img/team-1.png'
  },
  { id: 'john-berger-1',
    firstname: 'John',
    surname: 'Berger',
    accountName: '@john.berger',
    accountLink: 'https://www.instagram.com/',
    address: 'Maui, NZ',
    srcLink: 'assets/img/team-2.png'
  },
];


export const postsData: PostItem[] = [
  {
    id: 'post-1',
    title: 'Post 1',
    // date: '',
    author: 'Author',
    body: `<p>Tell that to the proud auto workers at a <a href="blog/post-2">Michigan</a> plant who, after they
            found out it was closing, kept showing up every day and working as hard as ever,
            because they knew there were people who counted on the brakes that they made.</p>`,
    summary: '<p>Ellie Turner and Jobe Harris have taken out the 2016 British National Surf Championships</p>',
    category: 'City',
    imageSrc: '/assets/img/photo-1.png',
    imageDesc: 'girs',
  },
  {
    id: 'post-2',
    title: 'Post 2',
    author: 'Author',
    body: `<p>It was closing, kept showing up every day and working as hard as ever,
          because they knew there were people who counted on the brakes that they made.
          Michigan plant who, after they found out it was closing
          <a href="blog/post-1">Michigan</a> </p>
          <p>This is YouTube video <a href="https://www.youtube.com/watch?v=hSu9BQEub4U">Philosophical Studies</a>`,
    summary: '<p>A large group of surfers invaded the coast of La Jolla Shores, in California, with a single goal in mind</p>',
    category: 'City',
    imageSrc: '/assets/img/photo-2.png',
    imageDesc: 'wave',
  },
  {
    id: 'post-3',
    title: 'Post 3',
    author: 'Author',
    body: `<p>It was closing, kept showing up every day and working as hard as ever,
          because they knew there were people who counted on the brakes that they made.
          Michigan plant who, after they found out it was closing
          <a href="blog/post-1">Michigan</a> </p>
          <p>This is YouTube video <a href="https://www.youtube.com/watch?v=hSu9BQEub4U">Philosophical Studies</a>`,
    summary: '<p>Surfboards are constantly evolving, and there are multiple board designs for a broad range of environments</p>',
    category: 'City',
    imageSrc: '/assets/img/photo-3.png',
    imageDesc: 'beach',
  }
];
