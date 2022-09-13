import { Footer, Header } from '@/components/common'
import { LayoutProps } from '@/models'
import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'

export function MainLayout ({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>{children}</Box>

      <Footer />
    </Stack>
  );
}