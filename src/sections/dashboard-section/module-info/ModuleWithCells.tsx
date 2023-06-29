import React from 'react';
import typography from 'src/theme/typography';
import { IModuleInfo } from 'src/@types/module';

type IModuleInfoProps = {
  module: IModuleInfo;
  onSelectCell: (id: string) => void;
  onSelectModule: (id: string) => void;
};

export default function ModuleWithCells({
  module,
  onSelectCell,
  onSelectModule,
}: IModuleInfoProps) {
  const { id, cells } = module;

  return (
    <div className="flex flex-col gap-1">
      <p
        role="button"
        className="text-text-primary py-1"
        style={typography.h6}
        onClick={() => onSelectModule(id)}
      >
        Module ID:&nbsp;{id}
      </p>
      <div className="flex flex-row gap-1">
        {[0, 1, 2, 3].map((idx) => (
          <div
            key={idx}
            role="button"
            className={`w-16 h-16 flex items-center justify-center p-1 rounded-lg ${
              cells[idx].status === 'normal' ? 'bg-gradient-normal' : 'bg-gradient-warning'
            }`}
            onClick={() => onSelectCell(cells[idx].id)}
          >
            <p className="text-text-primary text-center" style={typography.body1}>
              {cells[idx].id}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-1">
        {[4, 5, 6, 7].map((idx) => (
          <div
            key={idx}
            role="button"
            className={`w-16 h-16 flex items-center justify-center p-1 rounded-lg ${
              cells[idx].status === 'normal' ? 'bg-gradient-normal' : 'bg-gradient-warning'
            }`}
            onClick={() => onSelectCell(cells[idx].id)}
          >
            <p className="text-text-primary text-center" style={typography.body1}>
              {cells[idx].id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
