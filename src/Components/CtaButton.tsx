import React from 'react'
import { LucideArrowRight } from './Icons/LucideArrowRight';
import { MaterialSymbolsStarRounded } from './Icons/MaterialStar';
import Image from 'next/image';
import Magnet from '@/Animations/Magnet/Magnet';
import { grapeNuts } from '@/app/fonts';
import AnimatedArrowIcon from './Icons/AnimatedArrowIcon';
import { openCtaPopup } from './CtaPopup';

const ctaText = "นัดคุยรายละเอียดเลย";
const supportText = "เจ้าของธุรกิจไว้ใจเรา";

export function CtaButton() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:scale-125">
      <div className="absolute -top-4 -right-16 hidden lg:block">
        <AnimatedArrowIcon className="-rotate-90 opacity-40" />
        {/* <p
          className={`absolute top-4 -right-36 rotate-3 text-base`}
        >
          ปรึกษารายละเอียดฟรี
        </p> */}
      </div>
      <Magnet padding={50} magnetStrength={10}>
        <button 
          onClick={openCtaPopup}
          className="cta flex items-center gap-2"
        >
          <Image
            src="/jerome_pfp.png"
            alt="Jerome pfp"
            width={32}
            height={32}
            className="rounded-full"
          />
          {ctaText} <LucideArrowRight />
        </button>
      </Magnet>
      <div className="flex flex-col items-center md:items-start gap-1">
        <div className="flex">
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
        </div>
        <p className="text-sm">{supportText}</p>
      </div>
    </div>
  );
}

export function CtaButtonHighlighted() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:scale-125">
      <Magnet padding={50} magnetStrength={10}>
        <button 
          onClick={openCtaPopup}
          className="cta !bg-white !text-primary flex items-center gap-2"
        >
          {/* <Image
            src="/jerome_pfp.png"
            alt="Jerome pfp"
            width={32}
            height={32}
            className="rounded-full"
          /> */}
          {ctaText} <LucideArrowRight />
        </button>
      </Magnet>
      <div className="flex flex-col items-center md:items-start gap-1">
        <div className="flex">
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
        </div>
        <p className="text-sm !text-white">{supportText}</p>
      </div>
    </div>
  );
}
