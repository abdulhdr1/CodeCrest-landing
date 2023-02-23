import Image from 'next/image';

import Icon from './icon.svg';

export function CreateAndEnhanceApps() {
  return (
    <div className="flex flex-col  rounded-3xl bg-white p-8 ">
      <h3 className={`mb-4 text-[28px] text-[#6246EA]`}>
        WE CREATE AND ENHANCE END-TO-END APPLICATIONS
      </h3>
      <div className="flex">
        <p className="mr-12 w-1/2 text-xl text-[#3F3D56]">
          No matter if you are just starting out or looking to enhance an
          existing application, we have the skills and expertise to make it
          happen.
          <span className="mt-2 block text-[#6246EA]">
            Let us help you take your business to the next level.
          </span>
        </p>
        <Image
          className="w-1/2 max-w-[500px]"
          src={Icon}
          alt="Applications icon"
        />
      </div>
    </div>
  );
}

/* <div className="bg-white p-16 rounded-3xl flex flex-col gap-16">
      <div>
        <h3 className={`text-4xl text-[#6246EA] mb-14`}>WHAT WE PROVIDE</h3>
        <p className="text-xl text-[#3F3D56]">
          everything from design, front-end and back-end development to We offer
          end-to-end application development services that cover pipelines,
          DevOps, and database configuration. Our team of experts is committed
          to delivering high-quality applications that meet your unique business
          needs.
        </p>
      </div>
      <Image className="max-w-md" src={Icon} alt="Programmer icon" />
    </div> */
