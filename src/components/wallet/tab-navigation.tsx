interface TabNavigationProps {
  activeTab: 'overview' | 'transactions';
  onTabChange: (tab: 'overview' | 'transactions') => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex gap-8 border-b">
      <button
        className={`pb-2 px-3 font-medium transition-all duration-200 relative ${activeTab === 'overview'
          ? 'text-[#4B8B9F] border-b border-[#4B8B9F]'
          : 'text-gray-500 hover:text-[#4B8B9F]'
          }`}
        onClick={() => onTabChange('overview')}
      >
        Overview
      </button>
      <button
        className={`pb-2 font-medium transition-all duration-200 relative ${activeTab === 'transactions'
          ? 'text-[#4B8B9F] border-b border-[#4B8B9F]'
          : 'text-gray-500 hover:text-[#4B8B9F]'
          }`}
        onClick={() => onTabChange('transactions')}
      >
        Transactions
      </button>
    </div>
  );
}
