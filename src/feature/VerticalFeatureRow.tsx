import className from 'classnames';
import { useRouter } from 'next/router';
import { MouseParallax } from 'react-just-parallax';

import FadeIn from '../animations/fadeIn';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-80',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <FadeIn delay={2} repeat={false}>
      <div className={verticalFeatureClass}>
        <div className="w-full text-center sm:w-1/2 sm:px-6">
          <MouseParallax strength={0.005}>
            <h3 className="text-5xl font-semibold text-magenta-200">
              {props.title}
            </h3>
            <div className="mt-6 text-2xl leading-9">{props.description}</div>
          </MouseParallax>
        </div>

        <div className="w-full p-10 sm:w-1/2">
          <MouseParallax strength={0.03}>
            <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
            />
          </MouseParallax>
        </div>
      </div>
    </FadeIn>
  );
};

export { VerticalFeatureRow };
