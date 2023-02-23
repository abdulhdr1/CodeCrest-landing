import { BsArrowRight } from 'react-icons/bs';

export function BringYourIdeas() {
  return (
    <div className="flex items-center rounded-3xl bg-white py-4 pl-8 pr-4 text-[28px] font-medium ">
      <span className="mr-2 inline-block min-w-max text-[#4545FF]">
        BRING YOUR IDEAS,
      </span>
      <button className="group flex w-full items-center rounded-lg bg-primary-normal px-4 py-3 text-white">
        LET US TAKE CARE OF THE REST
        <BsArrowRight className="transition-all group-hover:translate-x-4" />
      </button>
    </div>
  );
}
