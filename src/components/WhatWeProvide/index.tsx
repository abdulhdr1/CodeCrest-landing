import Image from 'next/image';

import Icon from './icon.svg';

export function WhatWeProvide() {
  return (
    <div className="bg-white p-8 rounded-3xl flex flex-col">
      <div className="mb-12">
        <h3 className={`text-[28px] text-[#6246EA] mb-4`}>WHAT WE PROVIDE</h3>
        <p className="text-xl text-[#3F3D56]">
          We offer end-to-end application development services that cover
          everything from design, front-end and back-end development to
          pipelines, DevOps, and database configuration.
        </p>
        <p className="text-xl text-[#3F3D56] mt-2">
          Our team of experts is committed to delivering high-quality
          applications that meet your unique business needs.
        </p>
      </div>
      <Image src={Icon} alt="Programmer icon" />
    </div>
  );
}
