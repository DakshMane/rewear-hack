import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star, Calendar, Package, ArrowRight } from 'lucide-react';
import { useAuth } from '../types/AuthContext';
import { mockItems } from '../data/mockData';
import { ItemCard } from '../components/ItemCard';
import {db} from '../firebase'; // Import your Firestore instance
import { collection, query, where, getDocs } from 'firebase/firestore';

export function DashboardPage() {
const [userItems , setUserItems] = useState<any[]>([]);

  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  useEffect(() => {
  const fetchItems = async () => {
    const q = query(collection(db, 'items'), where('uploaderId', '==', user.id));
    const snapshot = await getDocs(q);
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUserItems(items);
  };

  fetchItems();
}, [user]);
  const recentItems = userItems.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">Manage your items and track your swaps</p>
        </div>
          
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-emerald-600">{user.points}</p>
              </div>
              <Star className="h-8 w-8 text-emerald-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Items Listed</p>
                <p className="text-2xl font-bold text-gray-900">{userItems.length}</p>
              </div>
              <Package className="h-8 w-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Swaps</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <ArrowRight className="h-8 w-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Member Since</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(user.joinedDate).toLocaleDateString()}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/add-item"
              className="flex items-center space-x-3 p-4 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <Plus className="h-6 w-6 text-emerald-600" />
              <span className="font-medium text-emerald-600">List New Item</span>
            </Link>
            <Link
              to="/browse"
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Package className="h-6 w-6 text-gray-600" />
              <span className="font-medium text-gray-600">Browse Items</span>
            </Link>
            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
              <ArrowRight className="h-6 w-6 text-gray-600" />
              <span className="font-medium text-gray-600">View Swap History</span>
            </div>
          </div>
        </div>

        {/* Recent Items */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Recent Items</h2>
            <Link
              to="/my-items"
              className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {recentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentItems.map(item => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No items yet</h3>
              <p className="text-gray-600 mb-4">Start by listing your first item</p>
              <Link
                to="/add-item"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                List Your First Item
              </Link>
            </div>
          )}
        </div>

        {/* Pending Swaps */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Swap Requests</h2>
          <div className="text-center py-8">
            <div className="text-gray-500">No pending swap requests</div>
          </div>
        </div>
      </div>
    </div>
  );
}