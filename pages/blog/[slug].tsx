import { Post } from '@/models'
import { getBlogList } from '@/utils/blogs'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { Box, Container } from '@mui/material'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify/lib'
import remarkParse from 'remark-parse/lib'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export interface BlogPageProps {
  post: Post
}

export default function PostDetailPage({ post }: BlogPageProps) {
  if (!post) return null

  return (
    <Box>
      <Container>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>
    </Box>
  )
}

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
    .use(remarkRehype)
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