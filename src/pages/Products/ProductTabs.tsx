'use client';

import { useState } from 'react';
import { ProductDetail } from '@/types';

type ProductTabsProps = {
  description: string;
  additionalInfo: { [key: string]: string };
};

export default function ProductTabs({ description, additionalInfo }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'info'>('description');

  const tabButtonStyles = "px-6 py-2 rounded-t-md font-semibold";
  const activeStyles = "bg-emerald-500 text-white";
  const inactiveStyles = "bg-gray-800 text-white";

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div>
        <button 
          onClick={() => setActiveTab('description')}
          className={`${tabButtonStyles} ${activeTab === 'description' ? activeStyles : inactiveStyles}`}
        >
          Description
        </button>
        <button 
          onClick={() => setActiveTab('info')}
          className={`${tabButtonStyles} ${activeTab === 'info' ? activeStyles : inactiveStyles}`}
        >
          Additional Information
        </button>
      </div>

      {/* Tab Content */}
      <div className="border border-gray-300 p-6 rounded-b-md rounded-tr-md">
        {activeTab === 'description' && (
          <p className="text-gray-600">{description}</p>
        )}
        {activeTab === 'info' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(additionalInfo).map(([key, value]) => (
              <div key={key} className="flex">
                <strong className="w-1/3 text-gray-700">{key}:</strong>
                <span className="w-2/3 text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}