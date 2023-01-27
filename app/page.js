import getPostMetaData from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

export default function HomePage() {
  const postMetaData = getPostMetaData();
  const postPreview = postMetaData?.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div>{postPreview}</div>;
}
