import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
      <section>
          {/*<div className=" moreStories grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {posts.map((post) => (
                  <PostPreview
                      key={post.slug}
                      title={post.title}
                      coverImage={post.coverImage}
                      slug={post.slug}
                      excerpt={post.excerpt}
                  />
              ))}
          </div>*/}
          <div className="mb-8 text-1xl md:text-1xl font-bold tracking-tighter leading-tight border-t-1 border-b-1 border-y-accent-7">
              <iframe
                  src="https://open.spotify.com/embed/artist/5qPjHotdh8WsXabiZweCuS?utm_source=generator" width="100%"
                  height="152" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"></iframe>
          </div>
      </section>
  );
}
