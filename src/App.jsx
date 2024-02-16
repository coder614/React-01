import Header from './componates/Header'
import Footer from './componates/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
