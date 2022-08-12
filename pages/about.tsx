import Header from '@/components/common/header';
import { MainLayout } from '@/components/common/layouts';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('@/components/common/header'), { ssr: false }) 

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  const page = router.query?.page

  console.log('About query: ', router.query)

  // 2.8 SSG + Data fetching 
  // This will only run in client only
  useEffect(() => {
    if (!page) return
    // IIFE - Immediately Invoked Function Expression
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()
      setPostList(data?.data)
      // Set up next phase by useSWR() for data fetching
    })()
  }, [page])

  function handleGetNextPage() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: Number(page) + 1,
        }
      },
      undefined,
      { shallow: true }  // shallow routing
      //this will be help change will be loaded from client only
      // this mean getStaticProps not running when click.
    )
  }

  return (
    <div>
      <div>About Page</div>
      <Header />
      <ul className='post-list'>
        {postList.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
      <button onClick={handleGetNextPage}>Get next Page data</button>
    </div>
  )
}

AboutPage.Layout = MainLayout;

export async function getStaticProps() {
  console.log('get static props')
  return {
    props: {}
  }
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   }
// }
