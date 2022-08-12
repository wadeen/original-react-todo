import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { HeaderBasicLayout } from './components/templates/HeaderBasicLayout'
import { Router } from './router/Router'

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <HeaderBasicLayout>
          <Router />
        </HeaderBasicLayout>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
