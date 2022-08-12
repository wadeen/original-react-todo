import { HelmetProvider } from 'react-helmet-async'
import { HeaderBasicLayout } from './components/templates/HeaderBasicLayout'
import { Router } from './router/Router'

function App() {
  return (
    <HelmetProvider>
      <HeaderBasicLayout>
        <Router />
      </HeaderBasicLayout>
    </HelmetProvider>
  )
}

export default App
