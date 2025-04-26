import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Layout from './layout/Layout';
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
