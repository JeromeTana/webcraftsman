import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const locale = useLocale();
  const { slug } = params;

  redirect({
    href: {
      pathname: "/posts/" + slug,
    },
    locale: locale,
  });
}
