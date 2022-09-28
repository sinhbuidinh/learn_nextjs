import path from 'path'
// import fs from 'fs'

const BLOG_MD_FOLDER = path.join(process.cwd(), 'blog')

export function getBlogList() {
  // const fileNameList = fs.readdirSync(BLOG_MD_FOLDER)
  // console.log(fileNameList)

  // for (const name of fileNameList) {
  //   const filePath = path.join(BLOG_MD_FOLDER, name)
  //   const mdContents = fs.readFileSync(filePath, 'utf-8')
  //   console.log(name, '\n', mdContents)
  //   break
  // }

  return []
}