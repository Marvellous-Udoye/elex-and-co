import type { PageMetadata } from '../lib/metadata'

export type NavItem = {
  label: string
  to: string
}

export type PurchaseCard = {
  id: string
  image: string
  label: string
  background: string
  items: Array<{
    id: string
    image: string
    name: string
    position: 'left' | 'right'
  }>
}

export type FeaturedProduct = {
  id: string
  imageId: string
  image: string
  name: string
  price: string
}

export const homeMetadata: PageMetadata = {
  title: 'ilhhamstores | Jewelry Storefront',
  description:
    'ilhhamstores is a modern jewelry storefront experience focused on elegance, luxury, and expression.',
  path: '/',
}

export function placeholderMetadata(slug: string): PageMetadata {
  const title = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

  return {
    title: `${title} | ilhhamstores`,
    description: `${title} page scaffold for the ilhhamstores storefront.`,
    path: `/${slug}`,
  }
}

export const primaryNavItems: NavItem[] = [
  { label: 'COLLECTIONS', to: '/collections' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
]

export const overlayNavItems: NavItem[] = [
  { label: 'cart', to: '/cart' },
  { label: 'COLLECTIONS', to: '/collections' },
  { label: 'women', to: '/women' },
  { label: 'men', to: '/men' },
  { label: 'about', to: '/about' },
  { label: 'contact', to: '/contact' },
  // { label: 'register', to: '/register' },
  // { label: 'sign in', to: '/sign-in' },
]

export const purchaseCards: PurchaseCard[] = [
  {
    id: 'elem-1',
    image:
      'https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format',
    label: 'HOME',
    background: '#C1AAA3',
    items: [
      {
        id: 'tea-towel',
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/f43af4d1c96e6232fcc4743fc383f08aac0d3658-2900x2900.png/Tea-Towel-Two-Good-Co.png?w=640&h=640&auto=format',
        name: 'Too good x emily imeson tea towel',
        position: 'left',
      },
      {
        id: 'two-kisses-candle',
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/cb56cd5aa6722fc293f654013276b73581c4e25e-1408x1407.png/Two%20Kisses%20Candle%20Two%20Good%20Co.png?rect=1,0,1407,1407&w=640&h=640&auto=format',
        name: 'two kisses candle',
        position: 'right',
      },
    ],
  },
  {
    id: 'elem-2',
    image:
      'https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format',
    label: 'PANTRY',
    background: '#F2DCCB',
    items: [
      {
        id: 'granola',
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/c9ad30643e765931dfad0ddcefcfdaf88abc8789-1408x1407.png/Two%20Good%20Granola%20Two%20Good%20Co.png?rect=1,0,1407,1407&w=320&h=320&auto=format',
        name: 'Too good granola',
        position: 'left',
      },
      {
        id: 'spicy-tomato-jam',
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/8c6345e689f2b4db8ef6103a2741513a306bec35-2545x2431.png/Spicy-Tomato-Jam-Two-Good-Co.png?rect=2,0,2542,2431&w=320&h=306&auto=format',
        name: 'spicy tomato jam',
        position: 'right',
      },
    ],
  },
  {
    id: 'elem-3',
    image:
      'https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format',
    label: 'BATH',
    background: '#FFFFFF',
    items: [
      {
        id: 'hand-wash',
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format',
        name: 'clean & nourish hand wash',
        position: 'left',
      },
      {
        id: 'hand-lotion',
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=1024&h=1024&auto=format',
        name: 'nourish and soothe hand lotion',
        position: 'right',
      },
    ],
  },
]

export const featuredProductRows: FeaturedProduct[][] = [
  [
    {
      id: 'lefty',
      imageId: 'page-4-img1',
      image:
        'https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format',
      name: 'The Love + CARE PACK',
      price: 'N50,000',
    },
    {
      id: 'righty',
      imageId: 'page-4-img2',
      image:
        'https://cdn.sanity.io/images/w8f1ak3c/production/7a2007de38624a0b2935416bf51a4584889aa232-5000x5000.png/Website%20Products%20(12).png?w=1024&h=1024&auto=format',
      name: 'TWO GOOD TOTE BAG',
      price: 'N40,000',
    },
  ],
  [
    {
      id: 'lefty2',
      imageId: 'page-5-img1',
      image:
        'https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=1024&h=1024&auto=format',
      name: 'The Love + CARE PACK',
      price: 'N38,000',
    },
    {
      id: 'righty2',
      imageId: 'page-5-img2',
      image:
        'https://cdn.sanity.io/images/w8f1ak3c/production/02240d01db2e8bdc5c630e9832ff7e0c7614f733-1876x1876.png/Cookbook-Two-Recipes-For-Resilience-Two-Good-Co.png?w=1024&h=1024&auto=format',
      name: 'TWO GOOD TOTE BAG',
      price: 'N45,000',
    },
  ],
]
