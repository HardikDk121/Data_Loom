import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Layout from './components/Layout';
function App() {
  

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
