import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WEBCRAFTSMAN - รับออกแบบและพัฒนาเว็บไซต์สำหรับธุรกิจ B2B",
    short_name: "WEBCRAFTSMAN",
    description:
      "รับออกแบบและพัฒนาเว็บไซต์ สำหรับธุรกิจ B2B เพื่อเพิ่มยอดขายและลูกค้าใหม่",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3058ea",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
