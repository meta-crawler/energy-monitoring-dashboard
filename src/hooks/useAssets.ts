function useAssets() {
  const svgs = (require as any).context('src/assets/images', true, /\.svg$/);
  const pngs = (require as any).context('src/assets/images', true, /\.png$/);
  const jpegs = (require as any).context('src/assets/images', true, /\.jpeg$/);

  return {
    logo: pngs('./logo.png'),
    dashboard: svgs('./logo.svg'),
    devices: svgs('./logo.svg'),
    history: svgs('./logo.svg'),
    charge: svgs('./logo.svg'),
    alert: svgs('./logo.svg'),
    setting: svgs('./logo.svg'),
  };
}
export default useAssets;
