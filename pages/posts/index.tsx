import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage ({posts}: PostListPageProps) {
  return (<>
    <div>Post List</div>
    <ul>
      {posts.map(post => <li key={post.id}>
        <Link href={`/posts/${post.id}`}><a>{post.title}</a></Link>
      </li>)}
    </ul>
  </>);
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  return {
    props: {
      posts: data.data.map((x: any) => ({id: x.id, title: x.title})),
    }
  }
}
