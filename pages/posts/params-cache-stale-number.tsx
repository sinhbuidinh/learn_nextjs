import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export interface ParamsProps {
  query: string,
  post: {
    title: string,
    author: string,
    description: string,
  },
}

export default function ParamsPage ({post}: ParamsProps) {
  const [second, setSecond] = useState(0);
  const router = useRouter()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond((x) => {
        if (x > 60) clearInterval(intervalId)
        return x + 1
      })
    }, 1000)
  }, [])

  return (
    <div>
      <h1>Post params page</h1>
      <p> Query: {JSON.stringify(router.query)}</p>

      <div className='cache-info'>
        <p>Time: {second}s</p>
        <p>Title: {post?.title}</p>
        <p>Author: {post?.author}</p>
        <p>Description: {post?.description}</p>
      </div>
    </div>
  );
}

//Cache s-maxage=5
export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate')
  //fake 3s delay same with call api
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const postId = context.query.postId
  if (!postId) return { props: {query: context.query} }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()

  return {
    props: {
      query: context.query,
      post: data,
    }
  }
}
