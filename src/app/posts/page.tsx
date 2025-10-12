import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function BlogPostsPage() {
  const locale = useLocale();
  redirect({
    href: "/posts",
    locale: locale,
  });
}
