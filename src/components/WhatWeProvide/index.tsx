import Image from 'next/image';

import Icon from './icon.svg';

export function WhatWeProvide() {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-8">
      <div className="mb-12">
        <h3 className={`mb-4 text-[28px] text-[#6246EA]`}>WHAT WE PROVIDE</h3>
        <p className="text-xl text-[#3F3D56]">
          We offer end-to-end application development services that cover
          everything from design, front-end and back-end development to
          pipelines, DevOps, and database configuration.
        </p>
        <p className="mt-2 text-xl text-[#3F3D56]">
          Our team of experts is committed to delivering high-quality
          applications that meet your unique business needs.
        </p>
      </div>
      <Image src={Icon} alt="Programmer icon" />
    </div>
  );
}
