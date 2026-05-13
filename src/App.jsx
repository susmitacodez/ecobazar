
import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainLayout from './components/layouts/MainLayout';
import SignIn from './pages/SignIn';

function App() {


  return (

    <Routes>
      <Route element={< MainLayout />} >
        <Route path="/" element={< Home />} />
        <Route path="registration" element={< Registration />} />
        <Route path="login" element={< Login />} />
        <Route path="signin" element={< SignIn />} />
        
      </Route>

    </Routes>

  )
}

export default App
