import Image from "next/image";

interface ImageShowcaseSectionProps {
  images: {
    src: string;
    alt: string;
    className?: string;
  }[];
  containerClassName?: string;
}

export default function ImageShowcaseSection({
  images,
  containerClassName = "mt-24",
}: ImageShowcaseSectionProps) {
  return (
    <div className={containerClassName}>
      <div className="grid grid-cols-3 gap-4 max-w-7xl m-auto mb-32 px-4 overflow-x-clip">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className={
              image.className ||
              "w-full h-full object-cover object-top shadow group-hover:scale-105 duration-300 rounded md:rounded-lg"
            }
          />
        ))}
      </div>
    </div>
  );
}
