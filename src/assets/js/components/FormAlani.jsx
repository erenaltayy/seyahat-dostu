import Form from './Form';

export default function FormAlani() {
  return (
    <div className="relative flex flex-col justify-end form-pattern py-4">
      <div className="overflow-hidden absolute w-50 h-full flex items-center z-0">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-scroll">
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
            <span className="text-logo-color font-extrabold text-8xl 2xl:text-[11rem]">SeyahatDostu</span>
          </div>
        </div>
      </div>
      <div className="w-screen relative z-10">
        <div className="container m-auto flex items-center justify-center lg:justify-end gap-4">
          <div className="basis-2/3 max-w-md">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

