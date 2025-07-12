import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Star, Heart, MessageCircle, Calendar, Tag, ShoppingBag } from 'lucide-react';
import { mockItems } from '../data/mockData';
import { useAuth } from '../types/AuthContext';

export function ItemDetailPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [swapMessage, setSwapMessage] = useState('');

  const item = mockItems.find(item => item.id === id);

  if (!item) {
    return <Navigate to="/browse" replace />;
  }

  const conditionColors = {
    'like-new': 'bg-green-100 text-green-800',
    'good': 'bg-yellow-100 text-yellow-800',
    'fair': 'bg-orange-100 text-orange-800',
  };

  const handleSwapRequest = () => {
    if (!user) return;
    // In a real app, this would send a swap request
    alert('Swap request sent!');
    setShowSwapModal(false);
    setSwapMessage('');
  };

  const handleRedeemWithPoints = () => {
    if (!user) return;
    if (user.points < item.pointValue) {
      alert('Insufficient points!');
      return;
    }
    // In a real app, this would process the redemption
    alert(`Item redeemed for ${item.pointValue} points!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="p-6">
              <div className="mb-4">
                <img
                  src={item.images[selectedImage]}
                  alt={item.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              {item.images.length > 1 && (
                <div className="flex space-x-2">
                  {item.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-emerald-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${item.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Item Details */}
            <div className="p-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${conditionColors[item.condition]}`}>
                    {item.condition}
                  </span>
                  <span className="text-gray-600">Size {item.size}</span>
                  <div className="flex items-center space-x-1 text-emerald-600">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-medium">{item.pointValue} points</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>

              {/* Item Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Tag className="h-5 w-5" />
                  <span>Category: {item.category}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Type: {item.type}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Listed: {new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Uploader Info */}
              <div className="border-t pt-6 mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Listed by</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-medium">
                      {item.uploaderName.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-700">{item.uploaderName}</span>
                </div>
              </div>

              {/* Action Buttons */}
              {user && user.id !== item.uploaderId && item.isAvailable ? (
                <div className="space-y-3">
                  <button
                    onClick={() => setShowSwapModal(true)}
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Request Swap</span>
                  </button>
                  <button
                    onClick={handleRedeemWithPoints}
                    disabled={user.points < item.pointValue}
                    className="w-full border border-emerald-600 text-emerald-600 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Star className="h-5 w-5" />
                    <span>Redeem with {item.pointValue} Points</span>
                  </button>
                  <button className="w-full text-gray-600 py-2 rounded-lg font-medium hover:text-gray-800 transition-colors flex items-center justify-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Add to Wishlist</span>
                  </button>
                </div>
              ) : !user ? (
                <div className="text-center py-4">
                  <p className="text-gray-600 mb-4">Sign in to swap or redeem this item</p>
                  <a
                    href="/login"
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Sign In
                  </a>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-600">This is your item</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Swap Modal */}
      {showSwapModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Request Swap for {item.title}
            </h3>
            <textarea
              value={swapMessage}
              onChange={(e) => setSwapMessage(e.target.value)}
              placeholder="Write a message to the owner..."
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 resize-none"
            />
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setShowSwapModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSwapRequest}
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}