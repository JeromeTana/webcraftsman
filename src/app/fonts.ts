import {
  Poppins,
  Poltawski_Nowy,
  Instrument_Serif,
  Instrument_Sans,
  Manrope,
  Grape_Nuts,
  Bricolage_Grotesque,
} from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const grapeNuts = Grape_Nuts({
  variable: "--font-grape-nuts",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});
