import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Eye } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockItems } from '../data/mockData';
import { ItemCard } from '../components/ItemCard';

export function AdminPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  // For demo purposes, we'll simulate different item states
  const pendingItems = mockItems.filter(item => !item.isApproved);
  const approvedItems = mockItems.filter(item => item.isApproved);

  const handleApprove = (itemId: string) => {
    // In a real app, this would update the item status in the database
    alert(`Item ${itemId} approved!`);
  };

  const handleReject = (itemId: string) => {
    // In a real app, this would update the item status in the database
    alert(`Item ${itemId} rejected!`);
  };

  const tabs = [
    { key: 'pending', label: 'Pending Review', count: pendingItems.length },
    { key: 'approved', label: 'Approved', count: approvedItems.length },
    { key: 'rejected', label: 'Rejected', count: 0 },
  ];

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'pending':
        return pendingItems;
      case 'approved':
        return approvedItems;
      case 'rejected':
        return [];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <p className="text-gray-600">Moderate and manage item listings</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-2xl font-bold text-gray-900">{mockItems.length}</p>
              </div>
              <Eye className="h-8 w-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-orange-600">{pendingItems.length}</p>
              </div>
              <XCircle className="h-8 w-8 text-orange-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-green-600">{approvedItems.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-red-600">0</p>
              </div>
              <XCircle className="h-8 w-8 text-red-400" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                      activeTab === tab.key
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {getCurrentItems().length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCurrentItems().map(item => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    showAdmin={activeTab === 'pending'}
                    onApprove={handleApprove}
                    onReject={handleReject}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">
                  No {activeTab} items found.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}