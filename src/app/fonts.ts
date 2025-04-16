import { Poppins, Poltawski_Nowy } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
