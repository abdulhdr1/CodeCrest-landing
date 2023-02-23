import className from 'classnames';
import Link from 'next/link';

type IButtonProps = {
  xl?: boolean;
  children: string;
  to: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      <Link href={props.to}>{props.children}</Link>

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply py-2 px-4 text-lg font-semibold;
          }

          .btn-xl {
            @apply py-5 px-20 text-3xl font-semibold;
          }

          .btn-primary {
            @apply bg-magenta-300 text-magenta-600;
          }

          .btn-primary:hover {
            @apply bg-magenta-300;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
