import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useAssets from 'src/hooks/useAssets';

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

  if (disabledLink) return logo;
  return <RouterLink to="/">{logo}</RouterLink>;
};

export default Logo;
