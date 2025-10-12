import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const locale = useLocale();
  const { slug } = await params;

  redirect({
    href: {
      pathname: "/posts/" + slug,
    },
    locale: locale,
  });
}
