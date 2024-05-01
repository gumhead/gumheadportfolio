import CoverImage from "./cover-image";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
};

export function PostHeader({ title, coverImage }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-3 md:mb-5 sm:mx-0 border-b-accent-7 border-y-accent-7">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
