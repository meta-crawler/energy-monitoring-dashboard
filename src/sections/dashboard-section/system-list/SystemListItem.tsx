import React from 'react';
import {
  BsChevronRight,
  BsChevronDown,
  BsFillCheckCircleFill,
  BsFillExclamationCircleFill,
} from 'react-icons/bs';
import { ISystemListItem } from 'src/@types/system';
import colors from 'src/theme/colors';
import typography from 'src/theme/typography';
import { DASHBOARD } from 'src/config-global';

type ISystemListItemProps = {
  system: ISystemListItem;
  open: boolean;
  activeString: string | null;
  onSystemSelect: (systemId: string) => void;
  onStringSelect: (stringId: string) => void;
};

export default function SystemListItem({
  system,
  open,
  activeString,
  onSystemSelect,
  onStringSelect,
}: ISystemListItemProps) {
  if (!open) {
    return (
      <li
        role="button"
        className="flex flex-row items-center gap-x-2 py-1 px-3 rounded hover:bg-grey-300/60"
        onClick={() => onSystemSelect(system.id)}
      >
        <BsChevronRight size={DASHBOARD.LIST_CHEVRON_ICON} color={colors('grey.500')} />

        {system.status === 'normal' ? (
          <BsFillCheckCircleFill size={DASHBOARD.LIST_STATUS_ICON} color={colors('primary.main')} />
        ) : (
          <BsFillExclamationCircleFill
            size={DASHBOARD.LIST_STATUS_ICON}
            color={colors('error.dark')}
          />
        )}

        <span style={typography.body1}>System&nbsp;{system.id}</span>
      </li>
    );
  }
  return (
    <>
      <li
        role="button"
        className="flex flex-row items-center gap-x-2 py-1 px-3 rounded hover:bg-grey-300/60"
        onClick={() => onSystemSelect(system.id)}
      >
        <BsChevronDown size={DASHBOARD.LIST_CHEVRON_ICON} color={colors('grey.500')} />

        {system.status === 'normal' ? (
          <BsFillCheckCircleFill size={DASHBOARD.LIST_STATUS_ICON} color={colors('primary.main')} />
        ) : (
          <BsFillExclamationCircleFill
            size={DASHBOARD.LIST_STATUS_ICON}
            color={colors('error.dark')}
          />
        )}

        <span style={typography.body1}>System&nbsp;{system.id}</span>
      </li>
      {open && system.strings && !!system.strings.length && (
        <ul>
          {system.strings.map((string) => (
            <li
              key={string.id}
              role="button"
              className={`flex flex-row items-center pl-10 pr-3 py-1 rounded hover:bg-grey-300/60 ${
                activeString === string.id ? 'bg-grey-300' : 'bg-transparent'
              }`}
              onClick={() => onStringSelect(string.id)}
            >
              {string.status === 'normal' ? (
                <BsFillCheckCircleFill color={colors('primary.main')} />
              ) : (
                <BsFillExclamationCircleFill color={colors('error.dark')} />
              )}

              <span className="ml-2" style={typography.body1}>
                String&nbsp;{string.id}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
