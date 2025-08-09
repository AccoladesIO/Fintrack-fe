import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SortField, SortDirection } from '@/types/dashboard';

interface TableHeaderCellProps {
  field: SortField;
  label: string;
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export function TableHeaderCell({
  field,
  label,
  sortField,
  sortDirection = 'asc',
  onSort
}: TableHeaderCellProps) {
  const isActive = sortField === field;

  return (
    <th className="text-left py-3 px-4 border-b-2 border-[#34616F17]">
      <Button
        variant="ghost"
        className="h-auto p-0 font-medium text-[#1B2528] opacity-70  hover:text-[#4B8B9F] transition-all duration-200"
        onClick={() => onSort(field)}
      >
        <span>{label}</span>
        {isActive && (
          <span className="ml-1 transition-transform duration-200">
            {sortDirection === 'asc' ? (
              <ChevronUp className="h-4 w-4 inline" />
            ) : (
              <ChevronDown className="h-4 w-4 inline" />
            )}
          </span>
        )}
      </Button>
    </th>
  );
}
