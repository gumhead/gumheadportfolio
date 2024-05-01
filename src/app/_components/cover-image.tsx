import cn from "classnames";
{/*import Link from "next/link";*/}
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full CoverImage ", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={600}
      height={350}
    />
  );
  return (
    <div className="sm:mx-0">
      {image}
      {/*{slug ? (
        <Link as={`/posts/${slug}`} href="/_posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )} */}
    </div>
  );
};

export default CoverImage;
