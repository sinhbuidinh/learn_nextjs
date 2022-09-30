import { Post } from '@/models'
import { getBlogList } from '@/utils/blogs'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { Box, Container } from '@mui/material'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify/lib'
import remarkParse from 'remark-parse/lib'
import remarkRehype from 'remark-rehype'
import remarkPrism from 'remark-prism'
import remarkToc from 'remark-toc'
import { unified } from 'unified'
import Script from 'next/script'
import { MainLayout } from '@/components/layouts'
import { Seo } from '@/components/common'
import { BLOG_ROUTE_PATH } from '@/components/common/header/routes'

export interface BlogPageProps {
  post: Post
}

export default function PostDetailPage({ post }: BlogPageProps) {
  if (!post) return null

  return (
    <Box>
      <Seo
        data={{
          title: `${post.title} | ${post.author?.name}`,
          description: post.description,
          url: `${process.env.HOST_URL}${BLOG_ROUTE_PATH}/${post.slug}`,
          thumbnailUrl: post.thumbnailUrl || 'https://res.cloudinary.com/dflcax7yz/image/upload/v1664533130/Portfolio_SINH/write_blog_yt9xi7.jpg',
        }}
      />

      <Container>
        <h1>{post.title}</h1>
        <p>{post.author?.name}</p>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>
      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  )
}

PostDetailPage.Layout = MainLayout

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getBlogList()

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  //find slug in context
  const slug = context.params?.slug
  if (!slug) return { notFound: true }

  //find blog by slug input
  const postList = await getBlogList()
  const post = postList.find((x) => x.slug === slug)
  if (!post) return { notFound: true }

  const html = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: process.env.TOC_HEADING || 'TOC' })
    .use(remarkPrism, { plugins: ['line-numbers'] })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '')
  post.htmlContent = html.toString()

  return {
    props: {
      post,
    },
  }
}