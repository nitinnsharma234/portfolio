import { Link } from "@/components/links";
import { cn } from "@/utils/cn";
import { LinkIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type Types = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps<T extends Types> = Omit<React.ComponentProps<T>, "as"> & {
  as?: T;
};

const Heading = <T extends Types = "h1">(props: HeadingProps<T>) => {
  const { as, className, children, id, ...rest } = props;
  const Component = as ?? "h1";
  const t = useTranslations();

  return (
    <Component className={cn("scroll-m-32", className)} id={id} {...rest}>
      <Link href={`#${id}`} className="group">
        {children}
        <LinkIcon
          aria-label={t("mdx.link-to-section")}
          className="ml-2 inline size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
        />
      </Link>
    </Component>
  );
};

export default Heading;
