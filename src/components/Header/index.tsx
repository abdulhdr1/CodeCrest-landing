import Image from 'next/image';

import LogoSvg from '../../../public/assets/images/codecrest_logo.svg';

export function Header() {
  return (
    <div className="absolute inset-0 z-30 mx-auto flex h-28 w-full max-w-7xl items-center px-6  backdrop-blur-lg">
      <div>
        <Image className="w-24" src={LogoSvg} alt="Code Crest Logo" />
      </div>
    </div>
  );
}
