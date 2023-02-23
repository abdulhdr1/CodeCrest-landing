import { ReactNode } from 'react';

import { MouseParallax, ScrollParallax } from 'react-just-parallax';

type ICTABannerProps = {
  title?: string;
  subtitle?: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <ScrollParallax>
    <div className="mb-40 flex flex-col rounded-md bg-magenta-500 p-4 text-center sm:flex-row sm:items-center sm:justify-center sm:p-12 sm:text-left">
      <div className="text-3xl font-semibold">
        <div className="text-center text-magenta-400">{props.title}</div>
        <div className="text-center text-magenta-200">{props.subtitle}</div>
      </div>
      <MouseParallax strength={0.1}>
        <div className="mt-3 flex justify-center sm:mt-0 sm:ml-2">
          {props.button}
        </div>
      </MouseParallax>
    </div>
  </ScrollParallax>
);

export { CTABanner };
