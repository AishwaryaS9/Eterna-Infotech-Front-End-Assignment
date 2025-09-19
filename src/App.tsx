import { Route, Routes } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
      </Routes>
    </>
  )
}

export default App