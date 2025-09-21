import { SHOWCASE_IMAGES } from "@/data";
import Image from "next/image";

export default function ImageShowcaseSection() {
  return (
    <div className="relative mt-24 overflow-x-clip">
      {/* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-white via-white/ to-transparent z-10 w-full h-full"/> */}
      <div className="min-w-2xl origin-top grid grid-cols-5 gap-4 scale-125">
        {/* {SHOWCASE_IMAGES.map((image, index) => ( */}
        <div className="flex flex-col gap-4 -mt-32">
          <Image
            src={"/showcase6.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase5.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </div>
        <div className="flex flex-col gap-4 -mt-16">
          <Image
            src={"/showcase4.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase7.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src={"/showcase3.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase8.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </div>
        <div className="flex flex-col gap-4 -mt-16">
          <Image
            src={"/showcase2.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase9.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </div>
        <div className="flex flex-col gap-4 -mt-32">
          <Image
            src={"/showcase6.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase6.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
