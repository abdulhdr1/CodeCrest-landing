import { ReactNode } from 'react';

import Image from 'next/image';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';

import MoutainsSvg from '../../public/assets/images/hero_mountains.svg';
import FadeIn from '../animations/fadeIn';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className="h-screen overflow-hidden">
    <MouseParallax strength={0.01}>
      <ScrollParallax strength={0.15}>
        <FadeIn delay={2} repeat={false}>
          <Image
            className="absolute right-0"
            src={MoutainsSvg}
            alt="mountains"
          />
        </FadeIn>
      </ScrollParallax>
    </MouseParallax>
    <FadeIn delay={1} repeat={false}>
      {props.children}
    </FadeIn>
  </div>
);

export { Background };
