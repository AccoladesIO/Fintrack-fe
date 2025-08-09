import { DashboardSummary } from '@/types/dashboard';
import { SummaryCard } from './summary-card';

interface SummaryCardsProps {
  summary: DashboardSummary;
}

export function SummaryCards({ summary }: SummaryCardsProps) {
  const cards = [
    {
      title: 'Total Balance',
      value: `$${summary.totalBalance.toLocaleString()}`,
      change: `+${summary.balanceChange}%`,
      isPositive: summary.balanceChange > 0
    },
    {
      title: 'Total Credits',
      value: `$${summary.totalCredits.toLocaleString()}`,
      change: `+${summary.creditsChange}%`,
      isPositive: summary.creditsChange > 0
    },
    {
      title: 'Total Debits',
      value: `$${summary.totalDebits.toLocaleString()}`,
      change: `${summary.debitsChange}%`,
      isPositive: summary.debitsChange > 0
    },
    {
      title: 'Transactions',
      value: summary.transactionCount.toString(),
      change: `+${summary.transactionChange}%`,
      isPositive: summary.transactionChange > 0
    }
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4 text-[#1B2528]">Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <SummaryCard
            key={index}
            title={card.title}
            value={card.value}
            change={card.change}
            isPositive={card.isPositive}
          />
        ))}
      </div>
    </div>
  );
}
