import Image from 'next/image';

import Icon from './icon.svg';

export function TechPeopleSolveTech() {
  return (
    <div className="flex flex-col  rounded-3xl bg-white p-8 ">
      <h3 className={`mb-4 text-[28px] text-[#6246EA]`}>
        LET TECH PEOPLE SOLVE THE TECH
      </h3>
      <div className="flex">
        <p className="mr-12 w-1/2 text-xl text-[#3F3D56]">
          Our team of
          <span className="text-[#6246EA]"> specialists</span> will bring your
          ideas to life in no time.
          <span className="mt-2 block">
            Don’t worry about building an engineering team or splitting
            resources.
          </span>
        </p>
        <Image
          className="w-1/2 max-w-[500px]"
          src={Icon}
          alt="Engineering team icon"
        />
      </div>
    </div>
  );
}
