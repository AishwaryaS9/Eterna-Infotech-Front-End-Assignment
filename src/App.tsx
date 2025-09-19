import { Route, Routes } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<LoginScreen />} />
      </Routes>
    </>
  )
}

export default App