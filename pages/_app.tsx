import '../styles/globals.css'
import { EmptyLayout } from '@/components/common/layouts'
import { AppPropsWithLayout } from '../models'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log('App re-render')

  const Layout = Component.Layout ?? EmptyLayout

  return <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
}

export default MyApp
