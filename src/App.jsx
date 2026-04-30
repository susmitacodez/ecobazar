
import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainLayout from './components/layouts/MainLayout';

function App() {


  return (

    <Routes>
      <Route element={< MainLayout />} >
        <Route path="/" element={< Home />} />
        <Route path="/" element={< Registration />} />
        <Route path="/" element={< Login />} />
      </Route>

    </Routes>

  )
}

export default App
