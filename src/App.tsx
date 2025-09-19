import { Route, Routes } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <main id="main-content" aria-label="Main content area">
      <Toaster />
      <Routes>
        <Route path='/' element={<LoginScreen aria-label="Login page" />} />
      </Routes>
    </main>
  )
}

export default App