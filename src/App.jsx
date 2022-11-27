import { useState } from 'react'
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-[100vw]">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
