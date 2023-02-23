import Image from 'next/image';

import LogoSvg from '../../public/assets/images/codecrest_logo.svg';

const Logo = () => {
  return <Image src={LogoSvg} alt={'Code Crest Logo'} />;
};

export { Logo };
