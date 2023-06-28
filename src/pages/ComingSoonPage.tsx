import React from 'react';
import useCountdown from 'src/hooks/useCountdown';
import typography from 'src/theme/typography';

export default function ComingSoonPage() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('07/17/2023 11:30'));

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-y-40">
      <div className="flex flex-col items-center gap-y-3">
        <p style={typography.h1}>Coming Soon!</p>
        <p className="text-text-secondary" style={typography.body1}>
          We are currently working hard on this page!
        </p>
      </div>

      <div
        className="flex flex-row justify-center items-start text-text-primary"
        style={typography.h2}
      >
        <TimeBlock label="Days" value={days} />
        <Divider />
        <TimeBlock label="Hours" value={hours} />
        <Divider />
        <TimeBlock label="Minutes" value={minutes} />
        <Divider />
        <TimeBlock label="Seconds" value={seconds} />
      </div>
    </div>
  );
}

type TimeBlockProps = {
  label: string;
  value: string;
};

const TimeBlock = ({ label, value }: TimeBlockProps) => (
  <div className="flex flex-col items-center">
    <p>{value}</p>
    <p className="text-text-secondary" style={typography.body1}>
      {label}
    </p>
  </div>
);

const Divider = () => <span className="mx-3 md:mx-6">:</span>;
