type BrandLogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function BrandLogo({ variant = 'dark', className = 'h-9 w-auto' }: BrandLogoProps) {
  const src = variant === 'light' ? '/brand/logo-2you-light.png' : '/brand/logo-2you-dark.png';

  return <img src={src} alt="2YOU Digital" className={`${className} object-contain`} />;
}
