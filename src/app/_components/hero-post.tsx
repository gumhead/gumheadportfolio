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
          <div className="mainCoverText text-2xl md:text-2xl tracking-tighter leading-tight md:pr-8 ml-10">
              <p className="font-extrabold text-accent-7 text-4xl md:text-4xl mb-5">Lorem Ipsum</p>
              <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
              <p>Morbi luctus dolor eu ipsum lacinia, sit amet facilisis mauris condimentum. Vivamus efficitur purus ligula, Nam fermentum luctus pulvinar. Nulla nec egestas dui.</p>
          </div>
      </div>
        {/*<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
              prefetch={false}
            >
              {title}
            </Link>
          </h3>
      </div>*/}
    </section>
  );
}
