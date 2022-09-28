import { MainLayout } from '@/components/layouts'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '@/models'
import { HeroSection, RecentPostsSection, FeaturedWorksSection } from '@/components/home'
import { Seo } from '@/components/common'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'Profile',
          description: 'Experience with NodeJS and PHP. Interested with both FE and BE',
          url: 'https://sinh-portfolio.vercel.app/',
          thumbnailUrl: 'https://res.cloudinary.com/dflcax7yz/image/upload/v1664337503/Portfolio_SINH/ava_circle_sc8pfc.png',
        }}
      />

      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
