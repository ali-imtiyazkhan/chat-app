import './App.css';
import Home from './src/pages/home/Home';
import { Login } from './src/pages/login/Login';
import Signup from './src/pages/signup/Signup';


function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    {/* <Login/> */}
    {/* <Signup/> */}

    <Home/>
    
    </div>
  );
}

export default App;
