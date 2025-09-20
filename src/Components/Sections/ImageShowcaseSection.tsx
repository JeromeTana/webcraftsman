import { SHOWCASE_IMAGES } from "@/data";
import Image from "next/image";

export default function ImageShowcaseSection() {
  return (
    <div className="mt-24">
      <div className="grid grid-cols-5 gap-4 max-w-7xl m-auto mb-32 px-4 overflow-x-clip">
        {SHOWCASE_IMAGES.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className={
              image.className +
              " w-full h-full object-cover aspect-[3/4] shadow-xl object-top group-hover:scale-105 duration-300 md:rounded"
            }
          />
        ))}
      </div>
    </div>
  );
}
