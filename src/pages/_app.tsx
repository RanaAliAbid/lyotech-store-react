import { AuthWrapper } from '@/contexts/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </>
  )
}
