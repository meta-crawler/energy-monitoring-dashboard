import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useAssets from 'src/hooks/useAssets';
import typography from 'src/theme/typography';

export interface LogoProps {
  disabledLink?: boolean;
  size?: number;
}

const Logo = ({ disabledLink, size }: LogoProps) => {
  const assets = useAssets();
  const logo = (
    <img
      src={assets.logo}
      alt="CAEC"
      className={`${size ? `w-[${size}px]` : 'w-32'} inline-flex`}
    />
  );

  const textLogo = (
    <span className="text-grey-300" style={typography.h3}>
      BMS
    </span>
  );

  if (disabledLink) return textLogo;
  return <RouterLink to="/">{logo}</RouterLink>;
};

export default Logo;
