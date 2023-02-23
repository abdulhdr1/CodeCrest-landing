import { Inter, Poiret_One } from '@next/font/google';
import Image from 'next/image';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';

import MountainsSvg from '../../../public/assets/images/hero_mountains.svg';
import FadeIn from '../../animations/fadeIn';

const poiretOne = Poiret_One({
  weight: '400',
  subsets: ['latin'],
});

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto relative flex min-h-screen items-center">
      <div className="relative">
        <MouseParallax strength={0.01}>
          <FadeIn delay={1} repeat={false}>
            <div className="relative z-30 text-left">
              <h1
                className={`text-[16vw] leading-tight text-primary-normal xl:text-[200px] ${poiretOne.className}`}
              >
                Code Crest
              </h1>
              <h2 className={`text-4xl text-[#4545FF] ${inter.className}`}>
                THE PINNACLE OF ENGINEERING
              </h2>
            </div>
          </FadeIn>
        </MouseParallax>
        <button
          className={`absolute bottom-[-112px] left-0 z-10 rounded-3xl bg-primary-normal px-[76px] py-[20px] text-3xl leading-6 text-white hover:cursor-pointer ${inter.className}`}
        >
          CONTACT US
        </button>
      </div>

      <ScrollParallax isAbsolutelyPositioned strength={0.06} shouldPause>
        <Image
          alt="moutains"
          className="absolute left-[60%] bottom-[-2px] -z-10"
          src={MountainsSvg}
        />
      </ScrollParallax>
    </div>
  );
}
