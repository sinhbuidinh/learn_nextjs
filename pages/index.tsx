import { MainLayout } from '@/components/layouts'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '@/models'

const Home: NextPageWithLayout = () => {
  return (
    <Box>Home page</Box>
  )
}

Home.Layout = MainLayout

export default Home
