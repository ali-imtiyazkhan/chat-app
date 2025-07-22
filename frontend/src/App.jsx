import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './src/pages/home/Home';
import { Login } from './src/pages/login/Login';
import Signup from './src/pages/signup/Signup';
import { useAuthContext } from './src/context/AuthContext';

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>

      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to = {"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to = "/" /> :<Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
