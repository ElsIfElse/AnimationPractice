import './App.css'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SpringAnim1 from './pages/SpringAnim1'
import SpringAnim2 from './pages/SpringAnim2'
import SpringAnim3 from './pages/SpringAnim3'
import SpringAnim4 from './pages/SpringAnim4'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/anim1' element={<SpringAnim1/>}/>
        <Route path='/anim2' element={<SpringAnim2/>}/>
        <Route path='/anim3' element={<SpringAnim3/>}/>
        <Route path='/anim4' element={<SpringAnim4/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
