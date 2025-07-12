import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { ClothingItem } from '../types';

interface ItemCardProps {
  item: ClothingItem;
  showAdmin?: boolean;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export function ItemCard({ item, showAdmin, onApprove, onReject }: ItemCardProps) {
  const conditionColors = {
    'like-new': 'bg-sage-100 text-sage-800',
    'good': 'bg-cream-100 text-cream-800',
    'fair': 'bg-brown-100 text-brown-800',
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
      <Link to={`/item/${item.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-md">
              <Heart className="h-4 w-4 text-brown-600 hover:text-sage-600 transition-colors" />
            </button>
          </div>
          {!item.isAvailable && (
            <div className="absolute inset-0 bg-brown-900/60 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-semibold bg-brown-800/80 px-4 py-2 rounded-full">Not Available</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-display font-semibold text-brown-900 group-hover:text-sage-600 transition-colors line-clamp-1 text-lg">
              {item.title}
            </h3>
            <div className="flex items-center space-x-1 text-sage-600 font-semibold bg-sage-50 px-2 py-1 rounded-full">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm">{item.pointValue}</span>
            </div>
          </div>
          
          <p className="text-brown-600 text-sm mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${conditionColors[item.condition]}`}>
                {item.condition}
              </span>
              <span className="text-xs text-brown-500 font-medium">Size {item.size}</span>
            </div>
            
            <span className="text-xs text-brown-500">by {item.uploaderName}</span>
          </div>
        </div>
      </Link>
      
      {showAdmin && !item.isApproved && (
        <div className="px-6 pb-6 flex space-x-3">
          <button
            onClick={() => onApprove?.(item.id)}
            className="flex-1 bg-sage-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-sage-700 transition-colors"
          >
            Approve
          </button>
          <button
            onClick={() => onReject?.(item.id)}
            className="flex-1 bg-brown-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-brown-700 transition-colors"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}