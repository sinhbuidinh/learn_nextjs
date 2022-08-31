import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AppPropsWithLayout } from '@/models'
import { EmptyLayout } from '@/components/layouts'
import { SWRConfig } from 'swr'
import axiosClient from 'api-client/axios-client'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme, createEmotionCache } from '@/utils'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* make sure style same for all browser of MUI */}
        <CssBaseline />

        <SWRConfig value={{
          fetcher: (url) => axiosClient.get(url),
          shouldRetryOnError: false
        }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
