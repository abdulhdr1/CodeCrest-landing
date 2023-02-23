import { BsArrowRight } from 'react-icons/bs';

export function BringYourIdeas() {
  return (
    <div className="bg-white pl-8 pr-4 py-4 rounded-3xl flex items-center font-medium text-[28px] ">
      <span className="text-[#4545FF] inline-block min-w-max mr-2">
        BRING YOUR IDEAS,
      </span>
      <button className="bg-primary-normal w-full group px-4 py-3 rounded-lg text-white flex items-center">
        LET US TAKE CARE OF THE REST
        <BsArrowRight className="group-hover:translate-x-4 transition-all" />
      </button>
    </div>
  );
}
