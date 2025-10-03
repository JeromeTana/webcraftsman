// This root layout exists only to satisfy Next.js requirements
// All actual layouts are in the [locale] directory
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
