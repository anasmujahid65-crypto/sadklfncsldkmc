import { MenuItem, Review, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Special Chicken Biryani',
    description: 'Our absolute crowd-pleaser. Made with authentic Karachi-style "tez masala" (bold spices), succulent chicken, and perfectly cooked, raseeli (juicy) long-grain basmati rice.',
    price: 'Rs 320',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', // Beautiful chicken biryani
    category: 'biryani',
    isPopular: true,
    isBestseller: true,
    spiciness: 3,
    serves: 'Serves 1-2',
    tags: ['Customer Favorite', 'Tez Masala', 'Raseeli']
  },
  {
    id: 'm2',
    name: 'Special Mutton Biryani',
    description: 'Traditional slow-cooked mutton biryani layered with rich spices, tender local mutton, and premium basmati rice infused with saffron.',
    price: 'Rs 580',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', // Premium mutton biryani
    category: 'biryani',
    isPopular: true,
    isMustTry: true,
    spiciness: 2,
    serves: 'Serves 1-2',
    tags: ['Traditional', 'Slow Cooked']
  },
  {
    id: 'm3',
    name: 'Prawn Biryani',
    description: 'A luxurious twist on Karachi’s favorite. Sautéed prawns cooked in a rich, spicy biryani masala, layered with fluffy basmati rice.',
    price: 'Rs 690',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80', // Seafood biryani
    category: 'biryani',
    isBestseller: true,
    spiciness: 2,
    serves: 'Serves 1-2',
    tags: ['Seafood Special']
  },
  {
    id: 'm4',
    name: 'Beef Pulao (Deghi Style)',
    description: 'Mild yet immensely flavorful. Infused with bone broth yakhni, tender beef chunks, and a aromatic blend of traditional spices like star anise and cardamom.',
    price: 'Rs 350',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80', // Aromatic yakhni pulao
    category: 'pulao',
    isPopular: true,
    isMustTry: true,
    spiciness: 1,
    serves: 'Serves 1-2',
    tags: ['Fragrant', 'Yakhni Base']
  },
  {
    id: 'm5',
    name: 'Shahi Handi',
    description: 'Rich, creamy tomato-onion gravy slow-cooked with boneless chicken, fresh cream, butter, and topped with premium processed cheese slices for a royal touch.',
    price: 'Rs 650',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', // Clay pot chicken handi
    category: 'handi',
    isBestseller: true,
    spiciness: 1,
    serves: 'Serves 2',
    tags: ['Cheesy', 'Mild & Creamy']
  },
  {
    id: 'm6',
    name: 'Paneer Reshmi Handi',
    description: 'Vegetarian masterpiece served in a traditional clay pot. Creamy paneer blocks slow-simmered in a white velvety gravy with capsicum and cheese triangles.',
    price: 'Rs 590',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', // Paneer handi
    category: 'handi',
    isMustTry: true,
    spiciness: 1,
    serves: 'Serves 2',
    tags: ['Clay Pot', 'Rich White Gravy']
  },
  {
    id: 'm7',
    name: 'Mutton Shinwari Karahi',
    description: 'Dera Ismail Khan style shinwari karahi. Made with premium mutton, fresh tomatoes, green chilies, and black pepper, garnished with ginger juliennes.',
    price: 'Rs 1,450', // Traditional half-kg / sharing portion
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', // Shinwari mutton karahi
    category: 'karahi',
    isPopular: true,
    isBestseller: true,
    spiciness: 2,
    serves: 'Serves 2-3',
    tags: ['Desi Ghee', 'Fresh Tomatoes Only']
  },
  {
    id: 'm8',
    name: 'Prawn Peshawari Karahi',
    description: 'Tender prawns flash-fried in a hot wok with crushed coriander, cumin, tomatoes, fresh ginger, and green chilies. A coastal-meets-frontier delicacy.',
    price: 'Rs 790',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80', // Beautiful prawns in a skillet/wok
    category: 'karahi',
    isMustTry: true,
    spiciness: 3,
    serves: 'Serves 1-2',
    tags: ['Spicy', 'Wok Cooked']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Shaheer Imran',
    rating: 5,
    text: 'Hands down the best biryani anyone in the office had ever had. No doubt about it. The spices are perfect, rice is separate and fragrant, and the portions are great.',
    date: '1 week ago'
  },
  {
    id: 'r2',
    author: 'Yasir Yaseen',
    role: 'Local Guide',
    rating: 5,
    text: 'Overall it was a good experience. Service was quick and taste was wonderful. A must when you\'re in Karachi. The handi is also rich and flavorful!',
    date: '3 weeks ago'
  },
  {
    id: 'r3',
    author: 'Ambreen Javed',
    rating: 5,
    text: 'Ordered chicken biryani and pulao! It was sooo delicious and cooked to perfection! The pulao has that perfect yakhni fragrance, and biryani has the perfect raseeli feel.',
    date: '1 month ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Traditional Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    category: 'Biryani'
  },
  {
    id: 'g2',
    title: 'Rich & Creamy Shahi Handi',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    category: 'Handi'
  },
  {
    id: 'g3',
    title: 'Mutton Shinwari Karahi Hot Wok',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    category: 'Karahi'
  },
  {
    id: 'g4',
    title: 'Fragrant Beef Pulao',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    category: 'Pulao'
  },
  {
    id: 'g5',
    title: 'Our Signature Prawn Biryani',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    category: 'Biryani'
  },
  {
    id: 'g6',
    title: 'Clay-pot Paneer Reshmi Handi',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    category: 'Handi'
  },
  {
    id: 'g7',
    title: 'Qorsia Kitchen Exterior & Dining Gateway',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    category: 'Storefront'
  },
  {
    id: 'g8',
    title: 'Qorsia Premium Takeaway & Delivery Packaging',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=800&q=80',
    category: 'Packaging'
  }
];
