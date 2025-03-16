import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />          
        <Route path="/Login" element={<LoginForm/>} />
        <Route path="/Register" element={<RegisterForm/>} />          
      </Routes>
    </BrowserRouter>
  )
}

export default App
