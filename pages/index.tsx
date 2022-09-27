import { MainLayout } from '@/components/layouts'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '@/models'
import { HeroSection, RecentPostsSection, FeaturedWorksSection } from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
