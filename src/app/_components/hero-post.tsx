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
          <div className="mainCoverText text-2xl md:text-1xl tracking-normal leading-tight md:pr-8 ml-10">
              <p className="font-extrabold text-accent-7 mb-5 text-2xl md:text-2xl">Original songs, sync licensing and
                  beatcreation</p>
              <p>Contact me for custom beatpacks, links available in my linktree page.</p>
              <p><a href="https://www.instagram.com/konkavbasisten/"
                    className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold duration-200 transition-colors mb-6 lg:mb-0">Konkavbasisten</a>
              </p>
              <p>and</p>
              <p><a href="https://www.instagram.com/gumhead_band/"
                    className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold duration-200 transition-colors mb-6 lg:mb-0">gumhead_band</a>
              </p>
              <p>on Instagram.</p>
              <p><a href="https://www.tiktok.com/@gumhead_band"
                    className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold duration-200 transition-colors mb-6 lg:mb-0">gumhead_band</a>
              </p>
              <p>On TikTok.</p>
              <p></p>
              <p></p>
              <div className="mt-16 mb-5 hidden lg:block">
                  <iframe
                          src="https://open.spotify.com/embed/artist/5qPjHotdh8WsXabiZweCuS?utm_source=generator"
                          width="100%" height="152"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy">
                  </iframe>
              </div>
          </div>
      </div>
        {/*<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">*/
        }
        {/*<h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
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
