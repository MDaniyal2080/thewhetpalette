import type { Article } from '@/components/article-card'

export const posts: Article[] = [
  {
    slug: 'north-americas-50-best-restaurants-top-15-things',
    title: "North America's 50 Best Restaurants: Top 15 Things to Know",
    excerpt:
      'Your essential guide to the 50 Best ceremony: what to expect, how voting works, and the stories behind the chefs and cities shaping the list.',
    image: '/images/dining.jpg',
    alt: 'Elegant fine-dining dining room with white tablecloths and warm lighting',
    category: 'Guide',
    date: '2025-09-01',
    author: 'Brenda Popritkin',
  },
  {
    slug: 'itinerary-from-james-beard-awards-to-turin',
    title:
      'An Itinerary of Stars: From Chicago’s James Beard Awards to Turin’s World’s Best Restaurants',
    excerpt:
      'A culinary road trip through iconic dining rooms and hidden gems, with stops for art, wine, and the flavors that define each region.',
    image: '/images/travel.jpg',
    alt: 'Traveler walking through a historic European arcade with warm sunlight',
    category: 'Travel',
    date: '2025-08-24',
    author: 'Brenda Popritkin',
  },
  {
    slug: 'santini-family-dal-pescatore-legacy',
    title:
      'Gourmand Getaway: The Santini Family’s Three Michelin-Starred Legacy at Dal Pescatore',
    excerpt:
      'An intimate look at the family, the fields, and the timeless dishes behind one of Italy’s most celebrated dining destinations.',
    image: '/images/Dish.jpg',
    alt: 'Refined Italian dish plated on a white plate with delicate garnishes',
    category: 'Feature',
    date: '2025-07-10',
    author: 'The Whet Palette',
  },
  {
    slug: 'yves-de-launay-chateau-angelus',
    title:
      'S4 E64 The Fine Wine Icon of Saint-Émilion: Yves de Launay on Château Angélus, Terroir, and Timeless Elegance',
    excerpt:
      'From sustainability to marketing to younger consumers, a conversation about Bordeaux’s future with a storied estate.',
    image: '/images/wine.jpg',
    alt: 'Sommelier pouring red wine into a crystal glass in a dimly lit cellar',
    category: 'Podcast',
    date: '2025-07-02',
    author: 'The Whet Palette',
  },
  {
    slug: 'miami-chef-story-daniel-serfer',
    title: "S4 E63 Big Flavors, Bigger Heart: Daniel Serfer’s Very Miami Chef Story",
    excerpt:
      'From deli counters to destination dining: a candid conversation with the chef behind some of Miami’s most beloved bites.',
    image: '/images/podcast.jpg',
    alt: 'Chef using tweezers to finish a plated dish at the pass',
    category: 'Podcast',
    date: '2025-06-15',
    author: 'Brenda Popritkin',
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
