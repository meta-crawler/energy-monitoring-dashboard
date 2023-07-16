import React, { useState, useEffect, useRef } from 'react';
import typography from 'src/theme/typography';
import { IDropdownItem, InitOption } from './type';
import { IoClose } from 'react-icons/io5';

type IDropDownProps = {
  selected: IDropdownItem;
  onChange: (selected: IDropdownItem) => void;
  options?: IDropdownItem[];
  name: string;
  placeholder?: string;
  style?: string;
  showClose?: boolean;
};

export default function DropDown({
  name,
  selected,
  options,
  placeholder,
  onChange,
  style,
  showClose = false,
}: IDropDownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      role="button"
      className={`relative w-full transition-all ease-in-out duration-200 ${style && style}`}
      onClick={toggleOpen}
      ref={dropdownRef}
    >
      <div className="relative w-full">
        <input
          type="text"
          id={name}
          name={name}
          value={selected.value}
          className="cursor-pointer bg-grey-100 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 w-full h-10 px-4 focus-visible:outline-none"
          placeholder={placeholder}
          required
          readOnly
        />
        {selected.value && showClose && (
          <div
            role="button"
            className="absolute top-0 bottom-0 right-9 flex items-center text-text-secondary hover:text-text-primary"
            onClick={() => onChange(InitOption)}
          >
            <IoClose />
          </div>
        )}
        <div
          role="button"
          className="absolute top-0 bottom-0 right-4 flex items-center text-text-secondary hover:text-text-primary"
        >
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </div>
      {options?.length && open && (
        <div className="md:absolute left-0 right-0 w-full max-h-64 overflow-y-auto rounded-lg bg-grey-100 mt-1 z-40 border border-grey-300/60 md:border-none">
          {options.map((option, idx) => (
            <div
              role="button"
              key={option.key}
              className={`flex flex-row items-center w-full hover:bg-grey-300 ${
                !idx && 'rounded-t-lg'
              } ${idx == options.length - 1 && 'rounded-b-lg'} ${
                idx && 'border-t border-t-grey-300/60'
              }`}
              onClick={() => {
                onChange(option);
                toggleOpen();
              }}
            >
              <p className="text-text-primary !text-sm py-2.5 px-4" style={typography.body1}>
                {option.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
