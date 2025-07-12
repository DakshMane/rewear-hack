import { ClothingItem } from '../types';

export const mockItems: ClothingItem[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    description: 'Classic vintage denim jacket in excellent condition. Perfect for layering and has that worn-in feel that\'s so sought after.',
    category: 'outerwear',
    type: 'Jacket',
    size: 'M',
    condition: 'good',
    tags: ['vintage', 'denim', 'casual', 'blue'],
    images: [
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1394939/pexels-photo-1394939.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '2',
    uploaderName: 'Sarah Johnson',
    pointValue: 75,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-20',
  },
  {
    id: '2',
    title: 'Floral Summer Dress',
    description: 'Beautiful floral summer dress, barely worn. Perfect for summer events and casual outings.',
    category: 'dresses',
    type: 'Maxi Dress',
    size: 'S',
    condition: 'like-new',
    tags: ['floral', 'summer', 'casual', 'maxi'],
    images: [
      'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '2',
    uploaderName: 'Sarah Johnson',
    pointValue: 90,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-18',
  },
  {
    id: '3',
    title: 'Black Leather Boots',
    description: 'Stylish black leather ankle boots. Great for fall and winter. Some wear on the soles but lots of life left.',
    category: 'shoes',
    type: 'Ankle Boots',
    size: '8',
    condition: 'good',
    tags: ['leather', 'black', 'boots', 'fall'],
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '2',
    uploaderName: 'Sarah Johnson',
    pointValue: 65,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-15',
  },
  {
    id: '4',
    title: 'White Cotton Blouse',
    description: 'Crisp white cotton blouse, perfect for work or casual wear. Machine washable and wrinkle-resistant.',
    category: 'tops',
    type: 'Blouse',
    size: 'M',
    condition: 'like-new',
    tags: ['white', 'cotton', 'work', 'blouse'],
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '2',
    uploaderName: 'Sarah Johnson',
    pointValue: 45,
    isAvailable: true,
    isApproved: true,
    createdAt: '2024-01-12',
  }
];