import { Transaction } from '@/types/dashboard';
import { TransactionTypeBadge } from './transaction-type-badge';

interface TransactionRowProps {
  transaction: Transaction;
}

export function TransactionRow({ transaction }: TransactionRowProps) {
  const formatAmount = (amount: number) => {
    const formatted = Math.abs(amount).toLocaleString();
    return amount >= 0 ? `$${formatted}` : `-$${formatted}`;
  };

  return (
    <tr className="transition-all duration-200 group  w-full">
      <td className="hover:bg-[#38677629] py-4 px-4 text-sm text-[#1B2528] group-hover:font-medium transition-all duration-200 border-b-2 border-[#34616F17]">
        {transaction.date}
      </td>
      <td className="hover:bg-[#38677629] py-4 px-4 text-sm text-[#1B2528] group-hover:font-medium transition-all duration-200 border-b-2 border-[#34616F17]">
        {transaction.remark}
      </td>
      <td className={`hover:bg-[#38677629] py-4 px-4 text-sm font-semibold transition-all duration-200 border-b-2 border-[#34616F17]  ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
        {formatAmount(transaction.amount)}
      </td>
      <td className="hover:bg-[#38677629] py-4 px-4 text-sm text-[#1B2528] group-hover:font-medium transition-all duration-200 border-b-2 border-[#34616F17]">
        {transaction.currency}
      </td>
      <td className="hover:bg-[#38677629] py-4 px-4 border-b border-[#34616F17]">
        <TransactionTypeBadge type={transaction.type} />
      </td>
    </tr>
  );
}
