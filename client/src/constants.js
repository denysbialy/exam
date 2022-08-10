const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 3000;
export default {
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  publicURL:
    env === 'production'
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: ['About', 'Contact', 'How It Works?', 'Testimonials', 'Our Work'],
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      title: 'LEGAL',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
    },
  ],
  topHeader: {
    title:
      'Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.',
    textLink: 'Read Announcement',
    link: 'http://www.google.com',
  },
  phoneHeader: '(877)355-3585',

  NAVIGATION_LINKS: {
    'Name Ideas': [
      'Beauty',
      'Consulting',
      'E-Commerce',
      'Fashion & Clothing',
      'Finance',
      'Real Estate',
      'Tech',
      'More Categories',
    ],
    Contests: [
      'How it works',
      'Pricing',
      'Agency Service',
      'Active Contests',
      'Winners',
      'Leaderboard',
      'Become a Creative',
    ],
    'Our Work': ['Names', 'Taglines', 'Logos', 'Testimonials'],
    'Names For Sale': [
      'Popular Names',
      'Short Names',
      'Intriguing Names',
      'Names by Category',
      'Visual Name Search',
      'Sell Your Domians',
    ],
    Blog: [
      'Ultimate Naming Guide',
      'Poetic Devices In Business Naming',
      'Crowded Bar Theory',
      'All Articles',
    ],
  },
  START_CONTEST_HEADER: {
    title: 'START A CONTEST',
    description:
      'Launching a contest on Squadhelp is very simple. Select the type of contest you would like to launch from the list below. Provide a detailed brief and select a pricing package. Begin receiving submissions instantly!',
  },
  CONTEST_CREATION_HEADER: {
    description:
      'Tell us a bit more about your business as well as your preferences so that creatives get a better idea about what you are looking for',
  },
};
