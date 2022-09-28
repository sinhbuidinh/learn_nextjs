import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import type { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'

export interface LayoutProps {
  children: ReactNode
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  emotionCache?: EmotionCache
}