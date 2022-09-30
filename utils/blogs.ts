import path from 'path'
import fs from 'fs'
import { Post } from '@/models'
import matter from 'gray-matter'

const BLOG_MD_FOLDER = path.join(process.cwd(), 'blog')

export async function getBlogList(): Promise<Post[]> {
  const fileNameList = fs.readdirSync(BLOG_MD_FOLDER)

  const postList: Post[] = []
  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_MD_FOLDER, fileName)
    const mdContents = fs.readFileSync(filePath, 'utf-8')

    const { data, excerpt, content } = matter(mdContents, {
      excerpt_separator: process.env.EXCERPT_SERPARATOR,
    })

    postList.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      thumbnailUrl: data.image || '',
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags || [],
      publishedDate: data.date,
      description: excerpt || '',
      mdContent: content,
      // thumbnailUrl: data.image || null,
    })
  }

  return postList
}