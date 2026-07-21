export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'biryani' | 'pulao' | 'handi' | 'karahi' | 'all';
  isPopular?: boolean;
  isBestseller?: boolean;
  isMustTry?: boolean;
  spiciness?: number; // 0 for mild, 1 for medium, 2 for hot (tez masala), 3 for extra spicy
  serves?: string; // e.g. "Serves 1", "Serves 1-2", "Serves 3-4"
  tags?: string[];
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}
