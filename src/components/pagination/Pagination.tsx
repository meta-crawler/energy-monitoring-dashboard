import React from 'react';
import typography from 'src/theme/typography';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DropDown from 'src/components/dropdown';
import { IDropdownItem } from 'src/components/dropdown/type';

const limits = [5, 10, 15, 20];

type IPaginationProps = {
  page: number;
  pages: number;
  limit: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
};

export default function Pagination({
  page,
  pages,
  limit,
  onPageChange,
  onLimitChange,
}: IPaginationProps) {
  const total = Math.ceil(pages / limit) - 1;
  return (
    <div className="w-full py-3 pl-3 flex flex-row flex-wrap gap-3 items-center justify-between">
      <p className="text-text-secondary" style={typography.body1}>
        Showing{' '}
        <span className="text-text-primary font-medium">{`${page * limit + 1}-${
          (page + 1) * limit
        }`}</span>{' '}
        of <span className="text-text-primary font-medium">{pages}</span>
      </p>
      <div className="flex flex-row items-center gap-x-3">
        <DropDown
          name="alarmLevel"
          selected={{ key: `${limit}`, value: `${limit}` }}
          options={limits.map((limit) => ({ key: `${limit}`, value: `${limit}` } as IDropdownItem))}
          style="md:w-20"
          onChange={(v) => onLimitChange(parseInt(v.value))}
        />
        <ul className="flex">
          <li>
            <a
              role="button"
              className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm font-medium shadow-md transition duration-150 ease-in-out hover:bg-light-300 ${
                page ? 'text-blue-gray-500' : 'text-grey-500'
              }`}
              onClick={() => onPageChange(Math.max(page - 1, 0))}
            >
              <FaChevronLeft />
            </a>
          </li>
          {[...Array(Math.ceil(pages / limit))].map((_, idx) => (
            <li key={idx}>
              <a
                role="button"
                className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full p-0 text-sm font-medium shadow-md transition duration-150 ease-in-out ${
                  idx == page ? 'text-white bg-pink-500' : 'text-blue-gray-500 bg-white'
                }`}
                onClick={() => onPageChange(idx)}
              >
                {idx + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              role="button"
              className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm font-medium shadow-md transition duration-150 ease-in-out hover:bg-light-300 ${
                page < total ? 'text-blue-gray-500' : 'text-grey-500'
              }`}
              onClick={() => onPageChange(Math.min(page + 1, total))}
            >
              <FaChevronRight />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
