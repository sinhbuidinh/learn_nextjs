import * as React from 'react'
import { MainLayout } from '@/components/layouts'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getBlogList } from '@/utils'
import { PostItem } from '@/components/blog'
import { Box, Container, Divider } from '@mui/material'

export interface BlogListPageProps {
  posts: any[]
}

export default function BlogListPage ({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>

        {(posts && posts.length > 0)
          ? (
            <Box
              component="ul"
              sx={{
                listStyleType: 'none',
                p: 0
              }}
            >
              {posts.map(post => <li key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <PostItem post={post} />
                  </a>
                </Link>

                <Divider sx={{ my:3 }} />
              </li>)}
            </Box>
          )
          : ''
        }
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // convert mark down file into js object
  const posts = await getBlogList()

  return {
    props: {
      posts: posts,
    }
  }
}