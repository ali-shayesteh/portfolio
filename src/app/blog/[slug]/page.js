// import { format, parseISO } from 'date-fns'
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: !post ? "404 - Not found" : post.title };
};

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  // 404 if the post does not exist.
  if (!post) notFound()

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {/* {format(parseISO(post.date), 'LLLL d, yyyy')} */}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Content />
      {/* {post.body.code} */}
    </article>
  );
};

export default PostLayout;
