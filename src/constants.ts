import instagram from "@assets/instagram.png"
import ss1 from "@assets/ss1.png"
import ss2 from "@assets/ss2.png"
import ss3 from "@assets/ss3.png"
import ss4 from "@assets/ss4.png"

// welcome
export const welcomeCopyright = `/* \n* Copyright (c) ${new Date().getFullYear()} Ihsan Fajar Ramadhan. All Rights Reserved \n* This is licensed software from (castrix.github.io), for limitations \n* and restrictions contact your company contract manager.  \n*/ \n`
export const welcomeConsole = [
  {
    sequence: [2000 + 500, 'console'],
    className: 'text-variable whitespace-pre-line',
  },
  {
    sequence: [2200 + 500, '.log('],
    className: 'text-function whitespace-pre-line',
  },
  {
    sequence: [2400 + 500, '“Welcome to:”'],
    className: 'text-string whitespace-pre-line',
  },
  {
    sequence: [2600 + 500, ')'],
    className: 'text-function whitespace-pre-line',
  },
  {
    sequence: [2700 + 500, '// Welcome to:'],
    className: 'text-secondary whitespace-pre-line ml-3',
  },
]
export const welcomeCall = [
  {
    sequence: [2900 + 500, 'myPortofolio('],
    className: 'text-function whitespace-pre-line',
  },
  {
    sequence: [3100 + 500, 'ihsanFajarRamadhan'],
    className: 'text-variable whitespace-pre-line',
  },
  {
    sequence: [3300 + 500, ')'],
    className: 'text-function whitespace-pre-line',
  },
  {
    sequence: [3400 + 500, '// { name: “Ihsan Fajar Ramadhan”, ... }'],
    className: 'text-secondary whitespace-pre-line ml-3 hidden md:block',
  },
]
export const welcomeHover = `// Hover my silhouette to render the picture`
export const welcomeCV = `// Click here to get the CV!`
export const CV_URL = "https://docs.google.com/document/d/1WKayGDe8uuSrcC3yx1zQ2EgY3svRJ6ZLPRfJ6jTqgo8/edit?usp=sharing"

// about
export const aboutGreetings = [
  'Hi there!\nHere you can find about my background.',
  'Hi there!\nHere you can find about my interest.',
  'Hi there!\nHere you can find about my career.',
]

export const aboutSections = {
  background: 'Background',
  interest: 'Interest',
  career: 'Career',
} as const

export const aboutMessages = {
  [aboutSections.background]: [
    "Hi, nice to meet you! I'm from Indonesia and I enjoy traveling to experience the unique atmospheres of different cities. I hold a Bachelor's degree in Applied Engineering from STTN-BATAN Yogyakarta. As a specialized Frontend Engineer, I have been involved in various projects and also have experience in mentoring.",
  ],
  [aboutSections.interest]: [
    "Thank you for your curiosity! My main interests lie in technology, concerts, idols. I love listening to music, playing games, and working on small projects like this portfolio.",
  ],
};

export const timeline = [
  {
    date: '2022 - present',
    position: 'Frontend Engineer (PAAS)',
    location: 'Accelbyte INC. Remote, GMT+7',
    description:
      'I work on building various applications, primarily using React. I am responsible for executing client customizations, collaborating with teammates to find optimal solutions, and providing feedback through code reviews.',
    icon: 'https://accelbyte.io/hubfs/ab.png',
  },
  {
    date: '2021 - 2022',
    position: 'Frontend Engineer Lead, Frontend Engineer, Mentor',
    location: 'Refactory. Indonesia (Lion Parcel, Sidig.id)',
    description:
      'In addition to my engineering duties, I led projects and mentored new hires, most of whom were fresh graduates. I guided three students for several months while continuing my development work.',
    icon: 'https://refactory.id/android-icon-192x192.png',
  },
  {
    date: '2020 - 2022',
    position: 'Frontend Engineer',
    location: 'Refactory. Indonesia (Lion Parcel Project)',
    description:
      "This marked the beginning of my professional career. I worked with many wonderful people and learned a great deal. I collaborated closely with the Lion Parcel team from Lion Group.",
    icon: 'https://refactory.id/android-icon-192x192.png',
  },
  {
    date: '2013 - 2020',
    position: 'IT Enthusiast',
    location: 'Indonesia',
    description:
      'I focused on my studies and graduated from university in 2020. My self-taught programming skills gave me an advantage during my university years.',
    icon: 'https://www.raspberrypi.org/assets/application/favicon-46f434047db3301a85dcd437b5ffc394b313707f820f52a94ce96d779d729f23.svg',
  },
  {
    date: '2011 - 2013',
    position: 'IT Enthusiast',
    location: '',
    description:
      'I was active in the Blogger community, always curious and eager to understand how things work. This is where my journey in self-taught programming began. I created my first .NET software and blog.',
    icon: 'https://www.blogger.com/about/favicon/android-chrome-192x192.png',
  },
];

export const socials = [
  {
    name: "email",
    value: "castrix.ihsan@gmail.com",
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
  },
  {
    name: "github",
    value: "https://github.com/castrix",
    icon: "https://github.githubassets.com/apple-touch-icon-144x144.png"
  },
  {
    name: "instagram",
    value: "https://www.instagram.com/ihsanfr0/",
    icon: instagram
  },
]

export type Hyperlinks = { label: string, url: string }[];

export const projects = [
  {
    screenshot: ss1,
    title: "Product: AccelByte",
    subTitle: "Accelbyte INC",
    description: "AccelByte is a game backend platform that supports cross-platform, storage, monetization, social, matchmaking, and more. The scope that I work are Admin Dashboard, Player Portal and client customization features.",
    hyperlinks: [
      {
        label: "accelbyte.io",
        url: "https://accelbyte.io/"
      }
    ]
  },
  {
    screenshot: ss2,
    title: "Product: Lion Parcel Core",
    subTitle: "Lion Parcel",
    description: "Lion Parcel is Indonesian logistic provider. I collaborated with Lion Parcel team to develop their Core System from early development until MVP and released to public nationwide.",
    hyperlinks: [
      {
        label: "lionparce.com",
        url: "https://lionparcel.com/"
      }
    ]
  },
  {
    screenshot: ss3,
    title: "Product: Sidig.id",
    subTitle: "Gamatechno",
    description: "Sidig is All-in-one distributor platform to optimize chain supply and after sales management. I took a role as Frontend Lead to rewrite the Sidig.id webiste from pure html/jquery/css to modern JS framework JS framework.",
    hyperlinks: [
      {
        label: "sidig.id",
        url: "https://sidig.id/"
      },
    ],
  },
  {
    screenshot: ss4,
    title: "Product: Aktiva",
    subTitle: "PT. SDK Indonesia",
    description: "Point of Sales accounting APP. My task is to rewrote the website app from html/css/js to modern JS framework.",
    hyperlinks: [
      {
        label: "Aktiva",
        url: "https://www.sdkindonesia.co.id/work/berkat-pos"
      },
    ],
  },
]