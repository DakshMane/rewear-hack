// src/types/ItemContext.tsx
import React, { createContext, useContext, useState } from 'react';

type Item = {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  size: string;
  condition: string;
  tags: string;
  images: string[];
  uploaderId: string;
  uploaderName: string;
};

type ItemContextType = {
  items: Item[];
  addItem: (item: Item) => void;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems(prev => [item, ...prev]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) throw new Error("useItems must be used within an ItemProvider");
  return context;
};
