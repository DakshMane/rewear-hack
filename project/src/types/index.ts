export interface User {
  id: string;
  email: string;
  name: string;
  points: number;
  isAdmin: boolean;
  avatar?: string;
  joinedDate: string;
}

export interface ClothingItem {
  id: string;
  title: string;
  description: string;
  category: 'tops' | 'bottoms' | 'dresses' | 'outerwear' | 'shoes' | 'accessories';
  type: string;
  size: string;
  condition: 'like-new' | 'good' | 'fair';
  tags: string[];
  images: string[];
  uploaderId: string;
  uploaderName: string;
  pointValue: number;
  isAvailable: boolean;
  isApproved: boolean;
  createdAt: string;
  swapRequests?: SwapRequest[];
}

export interface SwapRequest {
  id: string;
  fromUserId: string;
  toUserId: string;
  itemId: string;
  offeredItemId?: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}