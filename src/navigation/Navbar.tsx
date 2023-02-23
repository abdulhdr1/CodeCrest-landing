import Link from 'next/link';

import { Logo } from '../templates/Logo';

export const Navbar = () => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/">
        <Logo />
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center text-3xl text-primary-normal">
        <Link href="/">Contact Us</Link>
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);
