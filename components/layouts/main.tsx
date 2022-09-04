import { Footer, Header } from '@/components/common'
import { LayoutProps } from '@/models'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'

export function MainLayout ({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/works">
          <a>Works</a>
        </Link>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}