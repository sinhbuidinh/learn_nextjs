import * as React from 'react'
import { MainLayout } from '@/components/layouts'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getBlogList } from '@/utils'

export interface BlogListPageProps {
  posts: any[]
}

export default function BlogListPage ({ posts }: BlogListPageProps) {
  return (<>
    <div>Blog List</div>
    {(posts && posts.length > 0)
      ? (
        <ul>
          {posts.map(post => <li key={post.id}>
            <Link href={`/posts/${post.id}`}><a>{post.title}</a></Link>
          </li>)}
        </ul>
      )
      : ''
    }
  </>);
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // convert mark down file into js object
  const data = await getBlogList()

  return {
    props: {
      posts: data && data.length > 0 ? data.map((x: any) => ({id: x.id ?? '', title: x.title ?? ''})) : [],
    }
  }
}