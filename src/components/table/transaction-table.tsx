"use client";

import { useState, useMemo } from 'react';
import { Transaction, SortField, SortDirection } from '@/types/dashboard';
import { TableHeaderCell } from './table-header-cell';
import { TransactionRow } from './transaction-row';

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const sortedTransactions = useMemo(() => {
    return [...transactions].sort((a, b) => {
      let aValue: string | number = a[sortField];
      let bValue: string | number = b[sortField];

      if (sortField === 'amount') {
        aValue = Math.abs(a.amount);
        bValue = Math.abs(b.amount);
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }, [transactions, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="p-6 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-x-2">
          <thead className="border-b border-[#34616F17]">
            <tr className=''>
              <TableHeaderCell
                field="date"
                label="Date"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <TableHeaderCell
                field="remark"
                label="Remark"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <TableHeaderCell
                field="amount"
                label="Amount"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <TableHeaderCell
                field="currency"
                label="Currency"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <TableHeaderCell
                field="type"
                label="Type"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </tr>
          </thead>
          <tbody className="bg-white">
            {sortedTransactions.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
