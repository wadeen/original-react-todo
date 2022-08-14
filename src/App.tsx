import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { HeaderBasicLayout } from './components/templates/HeaderBasicLayout'
import { Router } from './router/Router'

function App() {
  return (
    <BrowserRouter basename="/react-todo/">
      <HelmetProvider>
        <RecoilRoot>
          <HeaderBasicLayout>
            <Router />
          </HeaderBasicLayout>
        </RecoilRoot>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
