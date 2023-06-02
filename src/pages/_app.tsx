import { AuthWrapper } from '@/contexts/AuthContext'
import { GlobalWrapper } from '@/contexts/GlobalContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthWrapper>
        <GlobalWrapper>
          <Component {...pageProps} />
        </GlobalWrapper>
      </AuthWrapper>
    </>
  )
}
