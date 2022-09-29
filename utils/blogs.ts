import path from 'path'
import fs from 'fs'
import { Post } from '@/models'

const BLOG_MD_FOLDER = path.join(process.cwd(), 'blog')

export async function getBlogList(): Promise<Post[]> {
  const fileNameList = fs.readdirSync(BLOG_MD_FOLDER)
  // console.log(fileNameList)

  for (const name of fileNameList) {
    const filePath = path.join(BLOG_MD_FOLDER, name)
    const mdContents = fs.readFileSync(filePath, 'utf-8')
    // console.log(name, '\n', mdContents)
    // break
  }

  const postList: Post[] = []
  return postList
}