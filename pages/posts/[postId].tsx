import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any
}

export default function PostDetailPage ({ post }: PostDetailPageProps) {
  const router = useRouter()

  // fallback: blocking => nothing happen until load data done => a little delay & lag
  // fallback: true
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // fallback: false
  // if (!post) {
  //   return <div>
  //     <h1>Detail with invalid id</h1>
  //     <div>PARAMS: {JSON.stringify(router.query)}</div>
  //   </div>
  // }

  return (
    <div>
        <h1>Post detail page</h1>
        
        <p>Title: {post.title}</p>
        <p>Author: {post.author}</p>
        <p>Description: {post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //only run 1 when build
  console.log('getStaticPaths')

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  return {
    //list post detail can be create html with all post returned.
    paths: data.data.map((post: any) => ({params: {postId: post.id}})),
    // fallback: false, // return not found
    // fallback: 'blocking', // request page not found => create one in cache
    // weakness: Time to first byte big or not base on time fetch data.
    fallback: true, // => router have key isFallback => Pending until fetch data done.
  }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId
  if (!postId) return { notFound: true }

  console.log('\ngetStaticProps', context.params?.postId)
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()

  return {
    props: {
      post: data,
    },
    revalidate: 5,//second.
  }
}
