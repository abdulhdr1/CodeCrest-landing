import Image from 'next/image';

import Icon from './icon.svg';

export function TechPeopleSolveTech() {
  return (
    <div className="bg-white p-8  rounded-3xl flex flex-col ">
      <h3 className={`text-[28px] text-[#6246EA] mb-4`}>
        LET TECH PEOPLE SOLVE THE TECH
      </h3>
      <div className="flex">
        <p className="text-xl mr-12 w-1/2 text-[#3F3D56]">
          Our team of
          <span className="text-[#6246EA]"> specialists</span> will bring your
          ideas to life in no time.
          <span className="block mt-2">
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
