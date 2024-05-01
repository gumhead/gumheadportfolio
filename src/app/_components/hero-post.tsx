import CoverImage from "@/app/_components/cover-image";
{/*import Link from "next/link";*/}

type Props = {
  title: string;
  coverImage: string;
  slug: string;
};
{/*insert slug, under HeroPost - coverImage*/}
export function HeroPost({
  title,
  coverImage,
}: Props) {
  return (
    <section className="hero-post">
      <div className="mb-8 md:mb-16 mainCoverImage">
        <CoverImage title={title} src={coverImage} />
          {/*<CoverImage title={title} src={coverImage} slug={slug} />*/}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
      {/* <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
              prefetch={false}
            >
              {title}
            </Link>
          </h3> */}
      </div>
    </section>
  );
}
