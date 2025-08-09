import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { WalletHeader } from '@/components/wallet/wallet-header';
import { SummaryCards } from '@/components/summary/summary-cards';
import { TransactionTable } from '@/components/table/transaction-table';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ErrorMessage } from '@/components/ui/error-message';
import { sampleTransactions, dashboardSummary } from '@/lib/sample-data';
import { Transaction, DashboardSummary } from '@/types/dashboard';
import Layout from '@/components/layout/Layout';
import { TabNavigation } from '@/components/wallet/tab-navigation';

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions'>('overview');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setTransactions(sampleTransactions);
        setSummary(dashboardSummary);
      } catch (err) {
        setError('Failed to load dashboard data. Please try again.');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading your financial dashboard..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <ErrorMessage message="No dashboard data available" />
      </div>
    );
  }

  return (
    <Layout>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={handleSidebarClose}
          />
          <div className="relative z-10 transform transition-transform duration-300 ease-in-out">
            <Sidebar onClose={handleSidebarClose} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <Header
          onMobileMenuToggle={handleSidebarToggle}
          isMobileMenuOpen={sidebarOpen}
        />
        <div className="bg-white">
          <WalletHeader />
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          {activeTab === "overview" && (
            <>
              <SummaryCards summary={summary} />
              <TransactionTable transactions={transactions} />
            </>
          )}
          {activeTab === "transactions" && (
            <div className='w-full flex items-center justify-center h-full text-black'>
              No transactions to display in this tab.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
