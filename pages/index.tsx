import { MainLayout } from '@/components/layouts'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '@/models'
import { HeroSection, RecentPostsSection } from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPostsSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
