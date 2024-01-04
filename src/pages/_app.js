import '@/styles/globals.css'
import { useContext, createContext } from 'react'
import { PreferencesProvider } from './provider/PreferencesProvider'

const PreferencesContext = createContext()


export default function App({ Component, pageProps }) {
  return (
    <PreferencesProvider>
      <Component {...pageProps} />
    </PreferencesProvider>
  );
}

